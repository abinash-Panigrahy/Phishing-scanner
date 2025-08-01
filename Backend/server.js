// this is my backend server file
const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 3000;  

app.get('/', (req, res) => {
    res.send('Hello, World!');
}   
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the app for testing or further configuration

// This allows the server to be imported in other files for testing or additional configuration
