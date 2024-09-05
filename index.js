const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');
const cors = require('cors');
const bodyParser = require('body-parser'); // Import body-parser
const bcrypt = require('bcrypt'); // Import bcrypt for hashing passwords

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000' // Adjust the origin to match your frontend URL
}));
app.use(bodyParser.json()); // Use body-parser to parse JSON requests

// Routes
app.post('/register', async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password } = req.body;

  try {
    // Check if the user already exists
    let userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    let user = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send('User registered');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 4000; // Ensure the port is set correctly
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
