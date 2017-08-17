import React from 'react';
import ArticleCard from './ArticleCard';
import axios from 'axios';
const topicPath = 'http://localhost:3000/api/topics';
class Topics extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      topics: []
    };
  }
  componentDidMount () {
    axios.get(`${topicPath}/${this.props.match.params.id}/articles`)
      .then(topics => {
        this.setState(
          { topics: topics.data.articles }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render () {
    const {topics} = this.state;
    return (
      <div>
        {
        topics.map((topic, i) => {
          return <div key={i}>
          <ArticleCard 
          title={topic.title} 
          votes={topic.votes} />
          </div>;
          })
        }
      </div>
    );
  }
}
export default Topics;