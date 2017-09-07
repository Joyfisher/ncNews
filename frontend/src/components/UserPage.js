import React from 'react';
import Loading from './Loading';
import axios from 'axios';
import PropTypes from 'prop-types';

const path = 'http://localhost:3000/api/users';

class UserPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            user: [],
            loading: false
        };
    }

  componentDidMount () {
    const url = `${path}/${this.props.match.params.username}`;
    axios.get(url)
      .then(res => {
        this.setState(
          { user: res.data.commentPoster[0],
          loading:false }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }
    render () {
        const { loading, user } = this.state;
        return (
            loading ?
            <Loading /> :
            <div id='UserPage'>
                <h3>{user.username}</h3>
                <h3>{user.name}</h3>
                <img src={user.avatar_url}/>
            </div>
        );
    }
}
UserPage.propTypes = {
    match: PropTypes.object.isRequired
};
export default UserPage;