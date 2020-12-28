const express = require('express');
const app = express();
const notes = require('./db/db.json')


const PORT = process.env.PORT || 3001;
//gets what we need out of the way^



app.get('/api/notes', (req, res) => {
    res.json(notes);
});


//goes last
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
});
