import React from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';

import Loading from './Loading';

const topicPath = 'http://localhost:3000/api/topics';

class TopicList extends React.Component {
  constructor () {
    super();
    this.state = {
      topics: [],
      loading: true
    };
  }
  componentDidMount () {
    axios.get(`${topicPath}/${this.props.match.params.id}/articles`)
    .then((response) => {

          console.log(response);
      this.setState({
        topics: response.data.articlesByTopic,
        loading: false
      });
    });

  }

  render () {
    const {loading, topics} = this.state;
    return (
      loading 
      ? <Loading />
      : <div>
        {topics.map((topic, i) => {
          return <div key={i}>
            <ArticleCard
              votes={topic.votes}
              title={topic.title}
              _id={topic._id}
              body={topic.body}
              created_by={topic.created_by}
            /><br />
            </div>;
        })
  }
  </div>
    );
}
}

export default TopicList;