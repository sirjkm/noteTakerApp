const router = require("express").Router();

const Note = require("../../models/Note");

router.post('/', (req,res) => {
    Note.create({
        title: req.body.title,
        note: req.body.note,
    })
    .then((newNote) => {
        res.json(newNote);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;