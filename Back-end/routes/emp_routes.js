
let express = require('express');
let router = express.Router();
let { users } = require('../models/users');
let bcrypt = require('bcrypt');

router.post("/register", async (req, res) => {
    try {
        let data = req.body;

        let hashedPassword = await bcrypt.hash(data.password, 10);
        

        let newuser = new users({
            name: data.name,
            email: data.email,
            password: hashedPassword,
            role: data.role
        });

        let result = await newuser.save();

        res.status(201).json({
            message: "Registration successful",
            user: result
        });

    } catch (err) {
        console.log("Registration error:", err);
        res.status(500).json({
            message: "Registration failed",
            error: err.message
        });
    }
});

router.post("/login", async (req, res) => {
    try {
        let data = req.body;

        let emailcheck = await users.findOne({ email: data.email });

        if (!emailcheck) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        let matchpass = await bcrypt.compare(
            data.password,
            emailcheck.password
        );

        if (matchpass) {
            return res.json({
                message: "Login successful",
                user: {
                    _id: emailcheck._id,
                    name: emailcheck.name,
                    email: emailcheck.email,
                    role: emailcheck.role
                }
            });
        }

        res.status(401).json({
            message: "Invalid credentials"
        });

    } catch (err) {
        console.log("Login error:", err);
        res.status(500).json({
            message: "Login failed",
            error: err.message
        });
    }
});

router.get("/viewtask", (req, res) => {
    res.send("view task page called");
});

module.exports = router;
