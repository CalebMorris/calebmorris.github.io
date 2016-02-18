import React from 'react';
import { Link } from 'react-router';

function normalizeNavLink(filename) {
  let splits = filename.split('.');
  splits.pop();
  return splits.join('.');
}

// applyIsActiveToLinks : function(menus) {
//   if (! menus) {
//     return menus;
//   }
//
//   const isActive = (url) => {
//     return url && this.context.router.isActive(url);
//   };
//
//   for (var menu of menus) {
//     menu.header.isActive = isActive(menu.header.link);
//     // if (submenu) {
//     //   for(var submenu of menu.subitems) {
//     //     submenu.isActive = isActive(submenu.link);
//     //   }
//     // }
//   }
//
//   return menus;
// },

function createNavFromListings(listing) {
  if (! listing || ! listing.children) {
    return [];
  }

  return listing.children.map((child) => {
    if (child.type !== 'folder') return null;

    const subChildren = child.children.map((subChild) => {
      if (subChild.name === 'listing.json' || subChild.type === 'folder') return null;
      return (
        <li className='bold active'>
          <Link to={subChild.path} className='waves-effect waves-teal'>{normalizeNavLink(subChild.name)}</Link>
        </li>
      );
    }).filter(x => !!x);

    return (
      <div>
        <li className='bold active'>
          <Link to={child.path} className='waves-effect waves-teal'>{child.name}</Link>
        </li>
        <div className="collapsible-body" style={{ display : 'block' }}>
          <ul>{subChildren}</ul>
        </div>
      </div>
    );
  }).filter(x => !!x);
}

module.exports = React.createClass({
  displayName : 'NavMenu',

  getInitialState : function() {
    return { listing : null };
  },

  componentWillMount : function() {
    return fetch('/Content/listing.json')
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let listing = JSON.parse(body);
      this.setState({ listing });
    })
    .catch((err) => {
      console.error('err', err);
    });
  },

  render : function() {

    if (this.state.listing === null) {
      return (
        <div className="side-nav fixed">
          <div className="center">
          {'Loading Navigation Contents'}
          </div>
          <div className='center'>
            <i className="fa fa-refresh fa-spin fa-3x"></i>
          </div>
        </div>
      );
    }

    const menus = createNavFromListings(this.state.listing);

    return (
      <div>
        <ul className="side-nav fixed">
          {menus}
        </ul>
      </div>
    );
  },

});
