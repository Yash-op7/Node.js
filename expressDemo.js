import express from 'express';
// const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/search/:id', (req, res) => {
    const obj = {name:'jsdf', 'date':new Date()};
    const {id} = req.params;
    console.log(Object.entries(obj));
    console.log(id)
    res.send(obj);
});

app.get('/', (req, res) => {
    res.send('Hello world 🏆');
})

app.listen(8003, () => {
    console.log('Server is running on port 8003');
});
