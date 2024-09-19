const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  text: String,
  time: String,
  icon: String,
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
