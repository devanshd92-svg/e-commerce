import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Modules/User.schema.js";
// import User from "../Models/User.js";

export async function Recivcedata(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    return res.status(201).json({
      message: "Registered successfully"
    });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}
