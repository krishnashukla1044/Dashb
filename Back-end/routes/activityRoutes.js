// routes/activityRoutes.js
const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity'); 

// Log activity
router.post('/log-activity', async (req, res) => {
  const { text, time, icon } = req.body;
  const activity = new Activity({ text, time, icon });

  try {
    await activity.save();
    res.status(200).json({ message: 'Activity logged' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to log activity' });
  }
});

// Get recent activities
router.get('/recent-activities', async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities' });
  }
});

module.exports = router;
