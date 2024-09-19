// controllers/activityController.js
const Activity = require('../models/Active'); // Adjust path if necessary

exports.getRecentActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activities' });
  }
};

exports.logActivity = async (req, res) => {
  const { text, time, icon } = req.body;
  const activity = new Activity({ text, time, icon });

  try {
    await activity.save();
    res.status(200).json({ message: 'Activity logged' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to log activity' });
  }
};
