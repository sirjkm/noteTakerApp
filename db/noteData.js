var noteArray = [];
var currentId = 0;

const createNote = (note) => {
    note.id = currentId ++;
    noteArray.push(note);
    return note;
};

const newNote = (noteId) => {
    var newNoteArray = [];
    for (i = 0; i < noteArray.length; i++) {
        if (noteArray[i].id != noteId) {
        newNoteArray.push(noteArray[i]);
        };
    };
    noteArray = newNoteArray;
};

const deleteNote = (noteId) => {
    var newNoteArray = [];
    for  (i=0; i<noteArray.length; i++) {
        if(noteArray[i].id != noteId) {
            newNoteArray.push(noteArray[i]);
        };
    };
    noteArray = newNoteArray;
};

const getAllNotes = () => {
    return noteArray;
};

module.exports = {
    createNote,
    newNote,
    deleteNote,
    getAllNotes,
};