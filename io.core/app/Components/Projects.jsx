var React = require('react');

module.exports = React.createClass({
  displayName: 'Projects',

  render: function () {
    return (
      <div className="row">

        <div className="col s3">
          Test Project Content Left
        </div>

        <div className="col s9">
          Test Project Content Right
        </div>

      </div>
    );
  }

});
