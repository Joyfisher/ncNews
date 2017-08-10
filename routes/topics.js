const router = require('express').Router();
const models = require('../models/models');

router.get('/', function (req, res) {
    models.Topics.find()
        .then((topics) => {
            return res.status(200).json({ topics });
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
});

router.get('/:topic_id/articles', function (req, res) {
    const slug = req.params.topic_id;
    models.Articles.find({ belongs_to: slug })
        .then((articlesByTopic) => {
            return res.status(200).json({ articlesByTopic });
        })
        .catch((err) => {
            return res.status(404).json(err);
        });

});

module.exports = router;