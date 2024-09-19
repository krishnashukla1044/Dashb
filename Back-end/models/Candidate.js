const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  resume: { type: String }, // URL or file path to resume
  status: { type: String, default: 'Applied' },
}, { timestamps: true });

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
