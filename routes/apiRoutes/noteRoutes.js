const router = require('express').Router()
//must've hastily copied code from index instead of just writing it like a normal person. This caused my get routes to return the webpage. Oops.
const notes = require('../../db/db.json')
const fs = require('fs') 
const path = require('path')

function addNote(body, notesArray) {
    const note = body;

    notesArray.push(note)

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}


router.get('/', (req, res) => {
    res.json(notes);
});

router.post('/', (req, res) => {
    req.body.id = notes.notes.length.toString();

    const note = addNote(req.body, notes.notes)

    res.json(note);
});

module.exports = router;