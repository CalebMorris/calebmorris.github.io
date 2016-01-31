
import React from 'react';
import { Link } from 'react-router';

module.exports = React.createClass({

  displayName: 'Header',

  render: function () {
    return (
      <nav className='blue darken-3'>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo center'>
            {'Caleb Morris'}
          </Link>
        </div>
      </nav>
    )
  },

});


