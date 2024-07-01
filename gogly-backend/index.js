const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
});
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

app.get('/locations', (req, res) => {
    res.json([
        {
            "city": "Hydrabad",
            "pin": "742102"
        },
        {
            "city": "Delhi",
            "pin": "62183"
        },
        {
            "city": "Mumbai",
            "pin": "12493"
        },
        {
            "city": "Goa",
            "pin": "05468"
        },
        {
            "city": "Rachi",
            "pin": "315648"
        },
    ])
});

//----------- NodeJS ------------ 
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
});

module.exports = app;