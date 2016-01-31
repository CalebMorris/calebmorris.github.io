var React = require('react');

import { Link } from 'react-router'

const itemPropType = React.PropTypes.shape({
  isActive : React.PropTypes.bool,
  text : React.PropTypes.string.isRequired,
  link : React.PropTypes.string.isRequired,
}).isRequired;

function createMenuLists(menus) {
  return menus.map((menu) => {
    var menuItems = [];

    if (menu.header.isActive) {
      menuItems.push(
        <li className='bold active'>
          <Link to={menu.header.link} className='waves-effect waves-teal'>{menu.header.text}</Link>
        </li>
      );

      const childItems = menu.subitems.map((item) => {
        return (
          <li>
            <Link to={item.link} className={'waves-effect waves-teal' + item.isActive ? ' active' : ''}>{item.text}</Link>
          </li>
        );
      });

      menuItems.push(
        <div className="collapsible-body" style={{ display : 'block' }}>
          <ul>{childItems}</ul>
        </div>
      );
      
    } else {
      menuItems.push(
        <li className='bold'>
          <Link to={menu.header.link} className='waves-effect waves-teal'>{menu.header.text}</Link>
        </li>
      );
    }

    return menuItems;
  });
}

module.exports = React.createClass({
  displayName: 'NavMenu',

  propTypes : {
    menus : React.PropTypes.arrayOf(
      React.PropTypes.shape({
        header : itemPropType,
        subitems : React.PropTypes.arrayOf(itemPropType).isRequired
      }).isRequired,
    ).isRequired,
  },

  render: function () {

    const menuList = createMenuLists(this.props.menus);

    return (
      <div>
        <ul className="side-nav fixed">
          {menuList}
        </ul>
      </div>
    );
  }

});
