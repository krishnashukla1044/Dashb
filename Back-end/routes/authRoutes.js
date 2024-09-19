const express = require('express');
const { registerUser, loginUser, getUserDetails, updateUser, logoutUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.route('/profile').put(protect, updateUser);
router.get('/me', protect, getUserDetails);
router.post('/logout', logoutUser)

module.exports = router;
