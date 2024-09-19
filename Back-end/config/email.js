const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User does not exist' });

    const token = jwt.sign({ id: user._id }, process.env.RESET_PASSWORD_SECRET, { expiresIn: '1h' });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: 'Password Reset',
      text: `Click this link to reset your password: http://localhost:5173/reset-password/${token}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Reset password email sent' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
