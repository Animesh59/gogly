const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/data', (req, res) => {
    res.json({
        "name": "Animesh",
        "id": "101",
        "stream": "Humanities"
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
