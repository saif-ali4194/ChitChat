const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const xss = require('xss');
const bcrypt = require('bcrypt');

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const sanitizedName = xss(name);
    const sanitizedEmail = xss(email);
    const sanitizedPassword = xss(password);

    const hashedPassword = await bcrypt.hash(sanitizedPassword, 10);
    const newUser = new User({
      name: sanitizedName, 
      email: sanitizedEmail.toLowerCase(), 
      password: hashedPassword 
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

module.exports = router;
