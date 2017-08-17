import React from 'react';

const user = [{
    firstName: 'Joy',
    lastName: 'Fisher' 
}];

class UserPage extends React.Component {
    render() {
        return (
            <div>
                <h3>{user[0].firstName}</h3>
                <h3>{user[0].lastName}</h3>
                </div>
        );
    }
}
export default UserPage