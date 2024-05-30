const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML)
app.use(express.static('public'));

// Handle GET request for the form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle POST request from the form
app.post('/submit-form', (req, res) => {
    const { username, password } = req.body;
    res.send(`Username: ${username}, Password: ${password}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
