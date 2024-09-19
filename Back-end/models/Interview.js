const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  application: { type: mongoose.Schema.Types.ObjectId, ref: 'Application', required: true },
  date: { type: Date, required: true },
  interviewer: { type: String, required: true },
  notes: { type: String },
}, { timestamps: true });

const Interview = mongoose.model('Interview', interviewSchema);
module.exports = Interview;
