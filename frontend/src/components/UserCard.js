import React from 'react';
import PropTypes from 'prop-types';

const UserCard = function (props) {
  return (
    <div className='box'>
      <user className='media'>
        <div className='media-left'>
          <i className='fa fa-arrow-up' aria-hidden='true'></i>
          <p>Upvotes:</p>
          <i className='fa fa-arrow-down' aria-hidden='true'></i>
          {props.votes}
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-3'>{props.title}</h3>
          </div>
        </div>
      </user>
    </div>
  );
};

UserCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default UserCard;