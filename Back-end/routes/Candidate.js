const express = require('express');
const { createCandidate, getCandidates, updateCandidate, deleteCandidate } = require('../controllers/candidateController');
const router = express.Router();

router.post('/', createCandidate);
router.get('/', getCandidates);
router.put('/:id', updateCandidate);
router.delete('/:id', deleteCandidate);

module.exports = router;
