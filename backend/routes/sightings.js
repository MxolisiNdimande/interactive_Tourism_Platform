const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/authMiddleware');

/* ===========================
   GET ALL SIGHTINGS
   (Admin + Kruger Staff)
=========================== */
router.get('/', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM sightings ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch sightings' });
  }
});

/* ===========================
   CREATE SIGHTING
=========================== */
router.post('/', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    const { species, location, gate, count, confidence, status } = req.body;

    const result = await pool.query(
      `INSERT INTO sightings
      (species, location, gate, count, confidence, status)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *`,
      [species, location, gate, count, confidence, status]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create sighting' });
  }
});

/* ===========================
   UPDATE SIGHTING
=========================== */
router.put('/:id', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    const { species, location, gate, count, confidence, status } = req.body;

    const result = await pool.query(
      `UPDATE sightings
       SET species=$1, location=$2, gate=$3,
           count=$4, confidence=$5, status=$6
       WHERE id=$7
       RETURNING *`,
      [species, location, gate, count, confidence, status, req.params.id]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update sighting' });
  }
});

/* ===========================
   DELETE SIGHTING
=========================== */
router.delete('/:id', auth(['admin', 'kruger-staff']), async (req, res) => {
  try {
    await pool.query(
      'DELETE FROM sightings WHERE id=$1',
      [req.params.id]
    );

    res.json({ message: 'Sighting deleted' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete sighting' });
  }
});

module.exports = router;
