
var React = require('react');

module.exports = React.createClass({

  displayName: 'Header',

  render: function () {
    return (
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">{'Caleb Morris'}</a>
        </div>
      </nav>
    )
  },

});


