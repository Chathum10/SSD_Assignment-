const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { requireLogin } = require("../middleware/auth");

// Register user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    //fix Vulnerability 01 - Hardcoded Secret
    // Generate a random salt with bcrypt
    bcrypt.genSalt(10, async (err, salt) => {
      if (err) {
        return res.status(500).json({ error: "Salt generation failed" });
      }

      // Hash the password using the generated salt
      bcrypt.hash(password, salt, async (err, hashed_password) => {
        if (err) {
          return res.status(500).json({ error: "Password hashing failed" });
        }

        user = new User({
          name,
          email,
          password: hashed_password,
        });

        await user.save();
        return res.status(201).json({ message: "User created successfully" });
      });
    });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

// Get logged in user
router.get("/", requireLogin, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password -__v");
    res.json(user);
  } catch (error) {
    // console.log(err);
    return res.status(400).json({ error: err.message });
  }
});

module.exports = router;
