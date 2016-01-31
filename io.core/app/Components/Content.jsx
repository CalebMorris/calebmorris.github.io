var React = require('react');

import { Link } from 'react-router'

module.exports = React.createClass({
  displayName: 'Content',

  getInitialState: function() {
    return { serverData: null };
  },

  refreshData: function() {
    // replace this with your favourite library for doing ajax calls
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/api/currentTime', true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      this.setState({ serverData: data.time });
    };
    xhr.send();
  },

  render: function () {
    return (
      <div className="row">

        <div className="col s3">
          <Link to="/projects">Projects</Link>
        </div>

        <div className="col s9">
          Test Content
        </div>

      </div>
    );
  }

});
