const noteData = require('../db/noteData');

module.exports = (app) => {
    app.get('/api/notes', (req,res) => res.json(noteData.getAllNotes()));

    app.get('/api/notes/:noteId', (req,res) => res.json(noteData.getNote(noteId)));

    app.post('/api/notes', (req,res) => {
        var newNote = noteData.createNote(req.body);
        res.json(newNote);
    });

    app.delete('/api/notes/:noteId', (req,res) => {
        noteData.deleteNote(req.params.noteId);
        res.json(true);
    });
};