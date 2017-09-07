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
            <h3 className='title is-3'>{props.body}</h3>
            <h5 className='title is-5'>{props.created_by}</h5>
          </div>
        </div>
      </article>
    </div>
  );
};
CommentCard.propTypes = {
  created_by: PropTypes.string,
  votes: PropTypes.number.isRequired,
  body: PropTypes.string
};
export default CommentCard;