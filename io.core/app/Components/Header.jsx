
import React from 'react';
import { Link } from 'react-router';

module.exports = React.createClass({

  displayName: 'Header',

  render: function () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo center'>
            {'Caleb Morris'}
          </Link>
        </div>
      </nav>
    )
  },

});


