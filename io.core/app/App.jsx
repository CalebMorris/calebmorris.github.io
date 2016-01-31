var React = require('react');

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
        <Favicon url={ faviconUrl }/>
        <Content>
          {this.props.children}
        </Content>
      </div>
    );
  },

});