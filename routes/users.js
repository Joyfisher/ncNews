const router = require('express').Router();
const models = require('../models/models');

router.get('/', function (req, res) {
    models.Users.find()
        .then((users) => {
            return res.status(200).json({ users });
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
});

module.exports = router;