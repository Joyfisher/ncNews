import React from 'react';
import CommentCard from './CommentCard';
import '../css/Comments.css';
import Loading from './Loading';
import axios from 'axios';

const path = 'http://localhost:3000/api/articles/:article_id/comments';

class Comments extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comments: [],
      loading: false
    };
  }

  componentDidMount () {
    let articleId = this.props.articleId;
    let replacedPath = path.replace(':article_id', articleId);

    axios.get(replacedPath)
      .then(comments => {
        this.setState(
          { comments: comments.data.commentsForArticles,
          loading:false }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render () {

    const { loading, comments } = this.state;
    return (
      loading ?
        <Loading /> :
        <div id='Comments'>
          {
            comments.map((comment, i) => {
              return <div key={i}>
                <CommentCard
                  votes={comment.votes}
                  body={comment.body}
                  created_by={comment.created_by} />
              </div>;
            })
          }
        </div>
    );
  }
}
export default Comments;