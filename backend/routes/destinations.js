const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/authMiddleware');

/* ===========================
   GET ALL DESTINATIONS
   (Public access allowed)
=========================== */
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM destinations ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch destinations' });
  }
});

/* ===========================
   CREATE DESTINATION
   (Admin Only)
=========================== */
router.post('/', auth(['admin']), async (req, res) => {
  try {
    const {
      name,
      country,
      description,
      image_url,
      category,
      latitude,
      longitude,
      activities,
      best_time,
      avg_cost,
      rating,
      has_animal_tracking
    } = req.body;

    const result = await pool.query(
      `INSERT INTO destinations 
      (name, country, description, image_url, category, latitude, longitude, activities, best_time, avg_cost, rating, has_animal_tracking)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
      RETURNING *`,
      [
        name,
        country,
        description,
        image_url,
        category,
        latitude,
        longitude,
        activities,
        best_time,
        avg_cost,
        rating,
        has_animal_tracking
      ]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create destination' });
  }
});

/* ===========================
   UPDATE DESTINATION
   (Admin Only)
=========================== */
router.put('/:id', auth(['admin']), async (req, res) => {
  try {
    const { name, description, category } = req.body;

    const result = await pool.query(
      `UPDATE destinations
       SET name=$1, description=$2, category=$3
       WHERE id=$4
       RETURNING *`,
      [name, description, category, req.params.id]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update destination' });
  }
});

/* ===========================
   DELETE DESTINATION
   (Admin Only)
=========================== */
router.delete('/:id', auth(['admin']), async (req, res) => {
  try {
    await pool.query(
      'DELETE FROM destinations WHERE id=$1',
      [req.params.id]
    );

    res.json({ message: 'Destination deleted' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete destination' });
  }
});

module.exports = router;
