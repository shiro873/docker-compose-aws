// Import express library
const express = require('express');

// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3001;

// Define a route for HTTP GET requests to the root URL '/'
app.get('/hello', (req, res) => {
    res.send('Hello World!!');
});

// Start the server on the defined PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
