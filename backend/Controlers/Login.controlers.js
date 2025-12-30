import User from "../Modules/User.schema.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function Login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey123",
      { expiresIn: "1d" }
    );

   return res.status(200).json({ message: "Login successful",  token: token,user: {id: user._id,email: user.email,},
    });
  } catch (error) {
      console.error("LOGIN ERROR", error);
    res.status(500).json({ message: "Server error" });
  }
}




// export async function Login(req, res) {

//     const { name, email } = req.body
//     if (!name || !email) {
//         return res.status(401).json({ message: "error", error: "data is not find" })

//     }
//     const newUser = new User({ name: name, email: email })

//     const token = jwt.sign({ id: newUser._id }, "secretkey123", { expiresIn: "1d" });

//     try {
//         await newUser.save()
//         return res.status(201).json({ message: "success", success: "data is find", token: token })
//     } catch (error) {
//         console.log("error", error)

//     }

// }