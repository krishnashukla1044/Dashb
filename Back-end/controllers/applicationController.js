const Application = require('../models/Application');
const JobPosting = require('../models/JobPosting');
const Candidate = require('../models/Candidate');

exports.applyForJob = async (req, res) => {
  const { jobPostingId, candidateId } = req.body;
  try {
    const jobPosting = await JobPosting.findById(jobPostingId);
    if (!jobPosting) {
      return res.status(404).json({ message: 'Job posting not found' });
    }

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }

    const application = await Application.create({ jobPosting: jobPostingId, candidate: candidateId });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Add more functions to list and update applications
