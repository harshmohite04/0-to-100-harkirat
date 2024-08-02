const fs = require("fs");
const express = require("express");
const port = 65535;
const app = express();

app.use(express.urlencoded({ extended: true }));

// Define a route for the root path to display the form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Harsh Mohite</title>
        </head>
        <body>
            <form action="/submit" method="GET">
                <input type="text" name="todo" placeholder="To do">
                <br>
                <input type="submit" value="Submit">
            </form>
        </body>
        </html>
    `);
});

// Handle form submission
app.get('/submit', (req, res) => {
    let userInput = req.query.todo;
    if (userInput) {
        fs.appendFile("a.txt", userInput + '\n', function(err) {
            if (err) {
                console.log(err);
                res.send("Error writing to file");
                return;
            }
            fs.readFile("a.txt", "utf8", function(err, data) {
                if (err) {
                    console.log(err);
                    res.send("Error reading file");
                    return;
                }
                res.send(`
                    <h1>Data successfully written to file</h1>
                    <pre>${data}</pre>
                    <a href="/">Go back</a>
                `);
            });
        });
    } else {
        res.send("Please enter some text.");
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`You are on port ${port}`);
});
