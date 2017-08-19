import React from 'react';
import CommentCard from './CommentCard';
import '../css/Comments.css';

const comments = [{ comment: 'hello', votes: 14 },
{ comment: 'awesome', votes: 15, username: 'tickle122' },
{ comment: 'not even sure what this article is about', votes: -12, username: 'tickle122' },
{ comment: 'Great', votes: 25, username: 'tickle122' },
{ comment: 'WhAAAAAAAAAt', votes: 8, username: 'tickle122' }];
class Comments extends React.Component {
  render () {
    return (
      <div id='Comments'>
       {comments.map(comment => <CommentCard comment={comment.comment} votes={comment.votes} username={comment.username} key={comment.comment} />)}
      </div>
    );
  }
}
export default Comments;