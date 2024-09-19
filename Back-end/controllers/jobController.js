const JobPostings = require('../models/JobPostings');

// Create a new job posting
exports.createJob = async (req, res) => {
  try {
    const job = new JobPostings(req.body);
    await job.save();
    res.status(201).json(job); // Respond with the created job and 201 status
  } catch (err) {
    res.status(400).json({ error: err.message }); // Send error if any issue occurs
  }
};

// Get all job postings
exports.getJobs = async (req, res) => {
  try {
    console.log('Fetching jobs...');
    const jobs = await JobPostings.find();
    res.json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err.message);
    res.status(500).json({ error: err.message });
  }
};


// Update a job posting by ID
exports.updateJob = async (req, res) => {
  try {
    const job = await JobPostings.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json(job); // Respond with the updated job
  } catch (err) {
    res.status(400).json({ error: err.message }); // Handle client errors
  }
};

// Delete a job posting by ID
exports.deleteJob = async (req, res) => {
  try {
    const job = await JobPostings.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' }); // Respond with success message
  } catch (err) {
    res.status(400).json({ error: err.message }); // Handle client errors
  }
};
