import React from 'react';
import marked from 'marked';

marked.setOptions({
  renderer : new marked.Renderer(),
  gfm : true,
  tables : true,
  breaks : false,
  pedantic : false,
  sanitize : true,
  smartLists : true,
  smartypants : false,
});

var MarkdownRenderer = React.createClass({

  propTypes : {
    content : React.PropTypes.string.isRequired,
  },

  render : function() {
    const renderedMarkup = marked(this.props.content);

    return (
      <div dangerouslySetInnerHTML={{ __html : renderedMarkup }} />
    );
  },

});

module.exports = MarkdownRenderer;
