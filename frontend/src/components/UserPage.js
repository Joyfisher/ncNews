import React from 'react';

const oneUser = [
  {username: 'tickle122', name: 'Tom Tickle', avatar_url: 'http://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg'}
];
class UserPage extends React.Component {
    render () {
        return (
            <div>
                <h3>{oneUser[0].username}</h3>
                <h3>{oneUser[0].name}</h3>
                <img src={oneUser[0].avatar_url}/>
            </div>
        );
    }
}
export default UserPage;