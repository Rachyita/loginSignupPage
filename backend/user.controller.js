const User = require("./user.model");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { username: user.username, password: user.password },
      "secretKey"
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
