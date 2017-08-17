import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
const ArticleCard = function (props) {
  console.log(props.id)
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
            <Link to="/articles/{this.props.id}"><h3 className='title is-3'>{props.title}</h3></Link>
          </div>
        </div>
      </article>
    </div>
  );
};
ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};
export default ArticleCard;