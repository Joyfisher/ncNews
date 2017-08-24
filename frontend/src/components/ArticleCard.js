import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ArticleCard = function (props) {
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
            <Link to ={'/articles/' + props._id}>
            <h2 className='title is-3'>{props.title}</h2>
            <span className = 'subtitile is-6'> by {props.created_by}</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired
};

export default ArticleCard;