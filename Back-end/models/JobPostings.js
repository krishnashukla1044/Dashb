const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true, 
    minlength: 3 // Ensuring the title has at least 3 characters
  },
  description: { 
    type: String, 
    required: true 
  },
  department: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  postedDate: { 
    type: Date, 
    default: Date.now 
  },
  status: { 
    type: String, 
    enum: ['Open', 'Closed', 'In Progress'], // Enum for allowed statuses
    default: 'Open' 
  },
}, { timestamps: true });

const JobPostings = mongoose.model('JobPostings', jobPostingSchema);

module.exports = JobPostings;
