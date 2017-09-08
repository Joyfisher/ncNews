import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../css/App.css';

const ArticleCard = function (props) {
  return (
    <div className='box'>
      <article className='media'>
        <div className='media-left'>
          <i className='fa fa-arrow-up' aria-hidden='true'></i>
        
          <p>{props.votes}</p>
          
          <i className='fa fa-arrow-down' aria-hidden='true'></i>
        </div>
        <div className='media-content'>
          <div className='content'>
            <Link to ={'/articles/' + props._id}>
            <h2 className='title is-3'>{props.title}</h2>
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
  _id: PropTypes.string.isRequired,
  created_by: PropTypes.string
};

export default ArticleCard;