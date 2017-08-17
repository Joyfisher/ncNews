import React from 'react';
import Comments from './Comments';
import axios from 'axios';
const path = 'http://localhost:3000/api/articles';
class ArticlePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      comment: '',
      articles:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange (event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit (e) {
    e.preventDefault();
    this.setState({
      comment: ''
    });
  }
  componentDidMount () {
    axios.get(`${path}/${this.props.match.params.id}`)
    .then(articles => {
      console.log(articles);
      this.setState(
        {article: articles.data.articles}
      );
    })
    .catch((err) => {
      console.log(err);
    });
  }
  render () {
    const { article } = this.state;
    return (
      <div id='ArticlePage'>
        <h3 className='title is-3'>
          {article}
        </h3>
        <br />
        <h4 className='title is-4'>
          {article}
        </h4>
        <form onSubmit={this.handleSubmit} className='form'>
          <label>
            Comment:
                    <input type="text" name='comment' value={this.state.comment} onChange={this.handleInputChange} placeholder='Comments here' /><br />
          </label>
          <button>Add a Comment</button>
        <Comments />
        </form>
      </div>
    );
  }
}
export default ArticlePage;