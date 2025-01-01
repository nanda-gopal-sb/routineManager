const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.post('/submit', (req, res) => {
    // Access form data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
  
    // Process the data (e.g., save to database, send email)
    console.log('Received data:', { name, email, message });
  
    // Send a response to the client
    res.send('Form submitted successfully!');
  });
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});