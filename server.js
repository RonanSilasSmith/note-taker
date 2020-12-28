const express = require('express');
const app = express();
const notes = require('./db/db.json')


const PORT = process.env.PORT || 3001;
//gets what we need out of the way^


function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
}

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    res.json(result);
});

//goes last
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
});
