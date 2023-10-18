const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });

router.get('/notes', (req, res) => {
    return res.json(db);
});

router.post('/notes', (req, res) => {
    var notesDb = require('../db/db.json');
    notesDb.push({
        title: req.body.title,
        text: req.body.text,
        id: uid.rnd()
    }) // (req.body); // uid.rnd()
    console.log(notesDb);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesDb));
    res.json(notesDb);
});

module.exports = router;