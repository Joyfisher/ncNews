import React from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const path = 'http://localhost:3000/api/users';

class Users extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: []
        };
    }

componentDidMount () {
     axios.get(path)
    .then(users => {
        this.setState(
            { users: users.data.users}
        );
    })
    .catch((err) => {
        console.log(err);
    });
}
    render () {
        const { users } = this.state;
        return (
            <div id= 'Users'>
                {users.map((user, i) => {
                    return <div key={i}>
                        <UserCard 
                        username={user.username} 
                        name={user.name} 
                        key={user.key} />
            </div>;
                })
                }
                </div>
        );
    }
}
export default Users;