import express from 'express';
// const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

app.get('/search/:id', (req, res) => {
    const obj = {name:'jsdf', 'date':new Date()};
    // for (let value of obj) {
    //     console.log(value);
    // }
    console.log(Object.entries(obj));
    res.send(obj);
});

app.listen(8003, () => {
    console.log('Server is running on port 8003');
});
