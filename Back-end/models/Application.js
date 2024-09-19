const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  jobPosting: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPostings', required: true },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
  applicationDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Under Review' },
}, { timestamps: true });

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
