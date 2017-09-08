import React from 'react';
import Comments from './Comments';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../css/Articles.css';
import { Link } from 'react-router-dom';

const path = 'http://localhost:3000/api/articles';
class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      article: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      comment: ''
    });
  }
  componentDidMount() {
    const url = `${path}/${this.props.match.params.id}`;
    axios.get(url)
      .then(res => {
        this.setState(
          { article: res.data.article }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { article } = this.state;
    let commentComponent = null;
    if (article) {
      commentComponent = <Comments articleId={article._id} />;
      return (
        <div id='ArticlePage'>
          <br />
          <h3 className='title is-3'>
            {article.title}
          </h3>
          <br />
          <div className='articleBody'>
            {article.body}
          </div>
          <br />
          <Link to={'/users/' + article.created_by}>
            <h5 className='title is-5'>
              {article.created_by}
              </h5></Link>
          <br />
          <form onSubmit={this.handleSubmit} className='form'>
            <label>
              What are your thoughts?:
                    <input type="text" name='comment' value={this.state.comment} onChange={this.handleInputChange} placeholder='Comments here' /><br />
            </label>
            <button>Add a Comment</button>

            {commentComponent}
          </form>
        </div>
      );
    } else {
      return null;
    }
  }
}
ArticlePage.propTypes = {
  match: PropTypes.object.isRequired
};
export default ArticlePage;