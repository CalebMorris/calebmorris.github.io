var React = require('react');

var Header = require('./Components/Header.jsx');
var Content = require('./Components/Content.jsx');
var Favicon = require('react-favicon');

var faviconUrl = require('./Assets/favicon.ico');

module.exports = React.createClass({

  displayName: 'App',

  render: function () {
    return (
      <div>
        <Header />
        <Favicon url={ faviconUrl }/>
        <div className="Content">
          {this.props.children || <Content />}
        </div>
      </div>
    );
  },

});