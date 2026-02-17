const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

/* ===============================
   CORS CONFIGURATION
================================ */
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

/* ===============================
   MIDDLEWARE
================================ */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===============================
   ROUTES
================================ */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/destinations', require('./routes/destinations'));
app.use('/api/sightings', require('./routes/sightings'));
app.use('/api/analytics', require('./routes/analytics'));


/* ===============================
   HEALTH CHECK
================================ */
app.get('/', (req, res) => {
  res.json({ message: 'Mpumalanga Gateway API is running' });
});

/* ===============================
   SERVER
================================ */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
