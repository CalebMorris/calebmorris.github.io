var React = require('react');

module.exports = React.createClass({
  displayName: 'Projects',

  render: function () {
    return (
      <div>
        {'Test Project Content Right'}
      </div>
    );
  }

});

module.exports.navMenu = {
  header : { text : 'Projects', link: '/projects' },
  subitems : [
    { text : 'testSub1' },
    { text : 'testSub2' }
  ],
};
