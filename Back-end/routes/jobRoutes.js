const express = require('express');
const {
  getJobs,
  createJob,
  updateJob,
  deleteJob
} = require('../controllers/jobController');
const router = express.Router();

// Get all job postings
router.get('/', getJobs);

// Create a new job posting
router.post('/', createJob);

// Update a job posting
router.put('/:id', updateJob);

// Delete a job posting
router.delete('/:id', deleteJob);

module.exports = router;
