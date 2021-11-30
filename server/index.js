const express = require('express');
const app = express();




app.get('/hello', (req, res) => {
    res.send("hello world")
})


app.listen(4000, () => {
    console.log("Server started on 4000, Boom!")
})