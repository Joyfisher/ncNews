import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = function (props) {
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
            <h3 className='title is-3'>{props.title}</h3>
          </div>
        </div>
      </article>
    </div>
  );
};

CommentCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default CommentCard;
