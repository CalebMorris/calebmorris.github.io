var React = require('react');

module.exports = React.createClass({

  displayName: 'Header',

  render: function () {
    return (
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Caleb Morris</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><a href="sass.html">Sass(FILLER)</a></li>
            <li><a href="badges.html">Components(FILLER)</a></li>
            <li><a href="collapsible.html">JavaScript(FILLER)</a></li>
          </ul>
        </div>
      </nav>
    )
  },

});


