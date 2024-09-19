const User = require('../models/user');
const generateToken = require('../utils/generateToken');
const bcrypt = require('bcryptjs');

// @desc Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// @desc Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

// @desc Get user profile
const getUserDetails = async (req, res) => {
    try {
        // Assuming user is retrieved from token or session
        const userId = req.user.id; // Adjust based on how you identify the user
        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    };

// @desc Update user profile
const updateUser = async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};


const logoutUser = async (req, res) => {
    try {
      // Clear the JWT token from cookies
      res.clearCookie('authToken', { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
  
      // Optionally, you can also invalidate the token on the server-side if needed
      // This might involve removing the token from a database or cache if applicable
  
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error('Error during logout:', error);
      res.status(500).json({ message: 'An error occurred during logout' });
    }
  };
  
  module.exports = logoutUser;
  

module.exports = {
  registerUser,
  loginUser,
  getUserDetails,
  updateUser,
  logoutUser,
};
