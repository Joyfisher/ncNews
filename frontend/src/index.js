import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './css/bulma.css';
import './css/font-awesome.css';

import App from './components/App';
import ArticleList from './components/ArticleList';
import ArticlePage from './components/ArticlePage';
import Topics from './components/Topics';
import Users from './components/Users';
import UserPage from './components/UserPage';

const history = createBrowserHistory();

ReactDOM.render(<Router history={history}>
  <App>
    <Switch>
      <Route exact path='/' component={ArticleList} />
      <Route path='/articles/:id' component={ArticlePage} />

      <Route path='/topics/:id' component={Topics} />

      <Route path='/users/:username' component={UserPage} />
      <Route path='/users' component={Users} />
    </Switch>
  </App>
</Router>, document.getElementById('app'));