
var React = require('react');
import { Link } from 'react-router'

module.exports = React.createClass({

  displayName: 'Header',

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      isProject : this.context.router.isActive('/projects'),
    };
  },

  render: function () {
    return (
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">{'Caleb Morris'}</a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li className={this.state.isProject ? 'active' : ''}>
              <Link to="/projects">{'Project'}</Link>
            </li>
            <li><a href="badges.html">Components(FILLER)</a></li>
            <li><a href="collapsible.html">JavaScript(FILLER)</a></li>
          </ul>
        </div>
      </nav>
    )
  },

});


