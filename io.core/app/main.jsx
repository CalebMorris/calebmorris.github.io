require("./Assets/style.scss");

var React = require('react');
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router'

var App = require('./App.jsx');
var NoMatch = require('./Components/NoMatch.jsx');
var Content = require('./Components/Content.jsx');
var Projects = require('./Components/Projects.jsx');

React.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route component={Content}>
        <Route path="projects" component={Projects} />
      </Route>

      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.getElementById('body')
);