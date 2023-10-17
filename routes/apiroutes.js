const router = require('express').Router();
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    return res.json(db);
});

router.post('/notes', (req, res) => {
    var notesDb = require('../db/db.json');
    notesDb.push(req.body);
    console.log(notesDb);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesDb));
    res.json(notesDb);
});

module.exports = router;