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
        <div className="row">

          <div className="col s3">
            Test Nav
          </div>

          <div className="col s9">
            Test Content
          </div>

          <Favicon url={ faviconUrl }/>
        </div>
      </div>
    );
  },

});