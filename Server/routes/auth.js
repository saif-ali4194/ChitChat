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
    const existingUser = await User.findOne({ email: sanitizedEmail.toLowerCase() });

    if (existingUser) {
      console.log("retured bitch")
      return res.status(400).json({ error: 'Email already exists' });
    }
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


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const sanitizedEmail = xss(email.toLowerCase());
    const sanitizedPassword = xss(password);

    const user = await User.findOne({ email: sanitizedEmail });
    if (!user) {
       return res.status(400).json({ error: 'Email not registered' });
    } 
    const isPasswordValid = await bcrypt.compare(sanitizedPassword, user.password);
    if (!isPasswordValid) {
       return res.status(401).json({ error: 'Invalid password' });
    }

    return res.status(200).json({ message: 'Login Sucessful' });

  } catch (error) {
    return res.status(500).json({ error: 'Login failed' });
  }
});


module.exports = router;
