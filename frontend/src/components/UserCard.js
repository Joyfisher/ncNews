import React from 'react';
import PropTypes from 'prop-types';

const UserCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <i className='fa fa-arrow-up' aria-hidden='true'></i>
          <p>Upvotes:</p>
          <i className='fa fa-arrow-down' aria-hidden='true'></i>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <a href="/users/:id"><h3 className='title is-3'>{props.username}</h3></a>
          </div>
        </div>
      </article>
    </div>
  );
};
UserCard.propTypes = {
  username: PropTypes.string.isRequired,
  votes: PropTypes.any
};
export default UserCard;