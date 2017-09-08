import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CommentCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <i className='fa fa-arrow-up' aria-hidden='true'></i>
          <br />
          <p>{props.votes}</p>
          <br />
          <i className='fa fa-arrow-down' aria-hidden='true'></i>
      
        </div>
        <div className='media-content'>
          <div className='content'>
            <h3 className='title is-4'>{props.body}</h3>
            <Link to={'/users/' + props.created_by}>
            <h5 className='title is-5'>
              {props.created_by}
              </h5></Link>
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