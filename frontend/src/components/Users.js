import React from 'react';
import UserCard from './UserCard';

const users = [{ title: 'I\'m an user', votes: 4 },
{ title: 'I\'m another user', votes: 5 },
{ title: 'I\'m an user too', votes: 2 }];

class UserList extends React.Component {
  render () {
    return (
      <div id='userList'>
        {users.map(user => <UserCard title={user.title} votes={user.votes} key={user.title} />)}
      </div>
    );
  }
}

export default UserList;