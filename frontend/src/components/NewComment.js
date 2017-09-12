import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const path = 'http://localhost:3000/api/articles/:article_id/comments';

class comment extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({
      comment: event.target.value,
    });
  }
  handleSubmit (e) {
    e.preventDefault();
    let articleId = this.props.articleId;
    let replacedPath = path.replace(':article_id', articleId);
    return axios.post(replacedPath, {
      body: this.state.comment,
    })
      .then(() => {
        this.setState({ comment: '' });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render () {
    return (
      <div className="comment">
        <h3>What are your thoughts?</h3>
        <form onSubmit={this.handleSubmit}>

          <div className="comment">
            <input
              id="comment-input"
              className="input"
              type="text"
              placeholder="Comment"
              value={this.state.comment}
              onChange={this.handleChange} />
          </div>


          <button className="submitButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }

}
comment.propTypes = {
  match: PropTypes.object
};
export default comment;


