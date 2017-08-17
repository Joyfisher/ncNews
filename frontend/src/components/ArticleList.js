import React from 'react';
import ArticleCard from './ArticleCard';
import Loading from './Loading';
import axios from 'axios';
const path = 'http://localhost:3000/api/articles';
class ArticleList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      articles: [],
      loading: false
    };
  }
  componentDidMount () {
    axios.get(`${path}`)
      .then(articles => {
        this.setState(
          { articles: articles.data.articles,
          loading:false }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render () {
    const { loading, articles } = this.state;
    return (
      loading ?
        <Loading /> :
        <div id='ArticleList'>
          <h1>Articles</h1>
          {
            articles.map((article, i) => {
              return <div key={i}>
                <ArticleCard
                  title={article.title}
                  votes={article.votes}
                  id={article._id} />
              </div>;
            })
          }
        </div>
    );
  }
}
export default ArticleList;