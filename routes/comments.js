const router = require('express').Router();
const Comments = require('../models/comments');

router.get('/', function (req, res) {
res.send('You\'ve found comments!');
});

router.put('/:comment_id', function (req, res) {
        const {comment_id} = req.params;

    let vote = req.query.vote;
    let query;

    Comments.findById(comment_id)
        .then((comment) => {
            if (comment.votes <= 0 && vote === 'down') {
                return res.status(200).json({ comment });
            }
            if (vote === 'up') query = { $inc: { votes: 1 } };
            if (vote === 'down') query = { $inc: { votes: -1 } };

            return Comments.findByIdAndUpdate({ _id: comment_id }, query, { new: true })
                .then((comment) => {
                    res.status(200).json({ comment });
                });
        }).catch((err) => {
            res.status(500).json(err);
        });
}
);

router.delete('/:comment_id', function (req, res) {
        
        const {comment_id} = req.params;
        return Comments.findByIdAndRemove(comment_id)
        .then(() => {
           return res.status(202).json({'message': 'comment successfully deleted'});
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});


module.exports = router;