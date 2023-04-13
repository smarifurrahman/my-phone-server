const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('my phone information is coming soon- nodemon-my');
})

app.listen(port, () => {
    console.log(`my phone server is running on port: ${port}`);
})