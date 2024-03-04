const express = require('express');
const app = express();

// Define routes for the MusicLab platform
app.get('/', (req, res) => {
  res.send('Welcome to MusicLab!');
});

app.get('/courses', (req, res) => {
  res.send('Explore our courses and start learning today!');
});

app.get('/instructors', (req, res) => {
  res.send('Meet our expert instructors and learn from the best!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});