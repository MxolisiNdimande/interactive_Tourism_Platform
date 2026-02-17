const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/authMiddleware');

/* =====================================================
   GET ALL SIGHTINGS
   Admin + Kruger Staff
   Includes reporter information
===================================================== */
router.get('/', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.*, 
              u.name AS reporter_name, 
              u.email AS reporter_email
       FROM animal_sightings s
       LEFT JOIN users u ON s.reported_by = u.id
       ORDER BY s.created_at DESC`
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sightings' });
  }
});

/* =====================================================
   CREATE SIGHTING
   Admin + Kruger Staff
===================================================== */
router.post('/', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    const {
      species,
      location,
      gate,
      count,
      confidence,
      status,
      latitude,
      longitude,
      notes,
      image_url
    } = req.body;

    const result = await pool.query(
      `INSERT INTO animal_sightings
       (species, location, gate, count, confidence, status,
        latitude, longitude, notes, image_url, reported_by)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING *`,
      [
        species,
        location,
        gate,
        count,
        confidence,
        status,
        latitude,
        longitude,
        notes,
        image_url,
        req.user.id  // 🔥 comes from JWT
      ]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create sighting' });
  }
});

/* =====================================================
   UPDATE SIGHTING
   Admin can update any
   Kruger staff can update ONLY their own
===================================================== */
router.put('/:id', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    const sightingId = req.params.id;

    const existing = await pool.query(
      'SELECT * FROM animal_sightings WHERE id = $1',
      [sightingId]
    );

    if (existing.rows.length === 0) {
      return res.status(404).json({ error: 'Sighting not found' });
    }

    const sighting = existing.rows[0];

    // Ownership check
    if (
      req.user.role === 'kruger-staff' &&
      sighting.reported_by !== req.user.id
    ) {
      return res.status(403).json({
        error: 'You can only edit your own sightings'
      });
    }

    const {
      species,
      location,
      gate,
      count,
      confidence,
      status,
      latitude,
      longitude,
      notes,
      image_url
    } = req.body;

    const result = await pool.query(
      `UPDATE animal_sightings
       SET species=$1,
           location=$2,
           gate=$3,
           count=$4,
           confidence=$5,
           status=$6,
           latitude=$7,
           longitude=$8,
           notes=$9,
           image_url=$10
       WHERE id=$11
       RETURNING *`,
      [
        species,
        location,
        gate,
        count,
        confidence,
        status,
        latitude,
        longitude,
        notes,
        image_url,
        sightingId
      ]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update sighting' });
  }
});

/* =====================================================
   DELETE SIGHTING
   Admin can delete any
   Kruger staff can delete ONLY their own
===================================================== */
router.delete('/:id', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    const sightingId = req.params.id;

    const existing = await pool.query(
      'SELECT * FROM animal_sightings WHERE id = $1',
      [sightingId]
    );

    if (existing.rows.length === 0) {
      return res.status(404).json({ error: 'Sighting not found' });
    }

    const sighting = existing.rows[0];

    if (
      req.user.role === 'kruger-staff' &&
      sighting.reported_by !== req.user.id
    ) {
      return res.status(403).json({
        error: 'You can only delete your own sightings'
      });
    }

    await pool.query(
      'DELETE FROM animal_sightings WHERE id=$1',
      [sightingId]
    );

    res.json({ message: 'Sighting deleted successfully' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete sighting' });
  }
});

module.exports = router;
