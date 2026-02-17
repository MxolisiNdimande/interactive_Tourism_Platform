const express = require('express');
const router = express.Router();
const pool = require('../db');
const auth = require('../middleware/authMiddleware');

/* =====================================================
   RANGER PERFORMANCE ANALYTICS
   Admin Only
===================================================== */
router.get('/rangers', auth(['admin']), async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT 
        u.id,
        u.name,
        u.email,
        COUNT(s.id) AS total_sightings,
        ROUND(AVG(s.confidence), 1) AS avg_confidence,
        MAX(s.created_at) AS last_reported
      FROM users u
      LEFT JOIN animal_sightings s 
        ON u.id = s.reported_by
      WHERE u.role = 'kruger-staff'
      GROUP BY u.id
      ORDER BY total_sightings DESC
      `
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch ranger analytics' });
  }
});

/* =====================================================
   MOST REPORTED SPECIES
   Admin Only
===================================================== */
router.get('/species', auth(['admin']), async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT 
        species,
        COUNT(*) AS total_reports
      FROM animal_sightings
      GROUP BY species
      ORDER BY total_reports DESC
      `
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch species analytics' });
  }
});

/* =====================================================
   DAILY ACTIVITY TREND (Last 7 Days)
===================================================== */
router.get('/daily', auth(['admin']), async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT 
        DATE(created_at) AS date,
        COUNT(*) AS total_reports
      FROM animal_sightings
      WHERE created_at >= NOW() - INTERVAL '7 days'
      GROUP BY DATE(created_at)
      ORDER BY date ASC
      `
    );

    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch daily analytics' });
  }
});

module.exports = router;
