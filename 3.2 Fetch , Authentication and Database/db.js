const mongoose = require("mongoose");
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/usersss").then(() => {
    console.log("Connected to MongoDB");

    const User = mongoose.model("User", {
      name: String,
      email: String,
      password: String,
    });

    app.post('/signup', async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;

        const existingUser = await User.findOne({ email: username });
        if (existingUser) {
            return res.status(400).send("Username already exists");
        }

        // const user = new User({
        //     name: name,
        //     email: username,
        //     password: password
        // });

        // await user.save(); // Save the user to the database

        await User.create({name: name,
            email: username,
            password: password})
        return res.status(201).send("User registered successfully");
    });

}).catch((err) => console.error("Connection error", err));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
