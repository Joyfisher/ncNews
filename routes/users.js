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

router.get('/:username', function (req, res, next) {
    const {username} = req.params;
     return models.Users.find({username})
     .then((commentPoster) => {
         if (commentPoster.length < 1) {
                return next({ status: 404, message: 'User not found' });
            }
            else return res.status(200).json({ commentPoster });
        })
    .catch((err) => {
        console.log(err)
            if (err.name === 'CastError') {
                return next({ status: 422, message: 'Invalid User' });
            }
        });
});

module.exports = router;