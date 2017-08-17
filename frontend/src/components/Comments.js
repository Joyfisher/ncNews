import React from 'react';
import CommentCard from './CommentCard';
import '../css/Comments.css';

const comments = [{ comment: 'HIYA', votes: 14}];

class Comments extends React.Component {
    render () {
        return (
            <div id='Comments'>
                {comments.map(comment => <CommentCard comment={comment.comment} votes= {comment.votes} key={comment.comment} />)}
                </div>
        );
    }
}
export default Comments;