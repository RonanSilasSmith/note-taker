const express = require('express');
const app = express();
const notes = require('./db/db.json')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;
//gets what we need out of the way^

function addNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    // return finished code to post route for response
    return note;
}

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

app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();

    const note = addNote(req.body, notes)

    res.json(note);
 });

//goes last
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
});
