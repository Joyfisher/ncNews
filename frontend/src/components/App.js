import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  render () {
    return (
      <div>
        <nav className='navbar is-transparent'>
          <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
              <img src="data:image/png;base64,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" width="112" height="28" />
            </a>
            <div className='navbar-burger burger' data-target='navMenuTransparent'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id='navMenuTransparent' className='navbar-menu'>
            <div className='navbar-start'>
              <a className='navbar-item' href='/topics/football'>
                Football
              </a>
              <a className='navbar-item' href='/topics/cooking'>
                Cooking
              </a>
              <a className='navbar-item' href='/topics/coding'>
                Coding
              </a>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
