import React from 'react';
import { Link } from 'react-router';
import NavMenu from '../Components/NavMenu.jsx';

import Projects from '../Components/Projects.jsx';

module.exports = React.createClass({
  displayName: 'Content',

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  applyIsActiveToLinks : function(menus) {
    if (! menus) return menus;

    const isActive = (url) => {
      return url && this.context.router.isActive(url);
    }

    for (var menu of menus) {
      menu.header.isActive = isActive(menu.header.link);
      if (submenu) {
        for(var submenu of menu.subitems) {
          submenu.isActive = isActive(submenu.link);
        }
      }
    }

    return menus;
  },

  render: function () {
    var menus = [
      Projects.navMenu,
      {
        header : { text : 'Blarg' }
      }
    ];

    menus = this.applyIsActiveToLinks(menus);

    return (
      <div className="row">

        <NavMenu menus={menus} />

        <div className="row">

          <div className="col s10 offset-s2">

            {this.props.children}

          </div>

        </div>

      </div>
    );
  }

});
