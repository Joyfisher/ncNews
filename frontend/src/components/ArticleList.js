import React from 'react';
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Loading from './Loading';

class ArticleList extends React.Component {
  constructor () {
    super();
    this.state = {
      articles: [],
      loading: true
    };
  }
  componentDidMount () {
    axios.get('http://localhost:3001/api/articles')
    .then((response) => {
      this.setState({
        articles: response.data.articles,
        loading: false
      });
    });

  }

  render () {
    const {loading, articles} = this.state;
    return (
      loading 
      ? <Loading />
      : <div id='ArticleList'>
        {articles.map((article, i) => {
          return <div key={i}>
            <Art
              id={article._id}
              title={article.title}
              votes={article.votes}
            /><br />
            </div>;
        })
  }
  </div>
    );
}
}
const Art = (props) => (
  <div>
    <Link to={`/articles/${props.id}`}>
    <h3>{props.title}</h3>
    <h3>{props.votes}</h3>
    </Link>
    </div>
);
export default ArticleList;