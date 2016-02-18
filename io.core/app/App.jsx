var React = require('react');

import NavMenu from './Components/NavMenu.jsx';
var Content = require('./Components/Content.jsx');
var Header = require('./Components/Header.jsx');
var Favicon = require('react-favicon');

var faviconUrl = require('./Assets/favicon.ico');

module.exports = React.createClass({

  displayName: 'App',

  render: function () {
    return (
      <div>
        <Header />
        <NavMenu />
        <Favicon url={ faviconUrl }/>
        <Content {...this.props}>
          {this.props.children}
        </Content>
      </div>
    );
  },

});
