const express = require('express')
const { v4: uuidv4 } = require('uuid');
const app = express()
const port = 3000

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect(`/:${uuidv4()}`);
})
app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})