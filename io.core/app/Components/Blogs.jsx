var React = require('react');

module.exports = React.createClass({
  displayName: 'Blogs',

  render: function () {
    return (
      <div>
        {'Test Blog Content Right'}
      </div>
    );
  }

});

module.exports.navMenu = {
  header : { text : 'Blogs', link: '/blogs' },
  subitems : [
    { text : 'testBlog1' },
    { text : 'testBlog2' }
  ],
};
