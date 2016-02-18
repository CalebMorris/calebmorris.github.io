import React from 'react';

import MarkdownRenderer from './Renderers/Markdown-Renderer.jsx'

const contentTypeHeader = 'Content-Type';
const contentTypeMarkdown = 'text/x-markdown';

module.exports = React.createClass({
  displayName : 'Content',

  propTypes : {
    location : React.PropTypes.shape({
      pathname : React.PropTypes.string.isRequired,
    }).isRequired,
  },

  getInitialState : () => {
    return {
      isLoaded : false,
      loadError : null,
      docType : null,
      documentContent : null,
    };
  },

  componentWillMount : function() {
    if (! this.props.location || ! this.props.location.pathname) {
      return this.setState({ isLoaded : true, loadError : new Error('Failed to parse location') });
    }

    return fetch(this.props.location.pathname)
    .then((response) => {
      return response.text()
        .then((body) => {
          this.setState({
            documentContent : body,
            docType : response.headers.get('Content-Type'),
            isLoaded : true,
          });
        });
    })
    .catch((err) => {
      return this.setState({ isLoaded : true, loadError : err });
    });
  },

  loader : (
    <div className='center' style={{ marginLeft : '-21.75%' }}>
      <i className="fa fa-refresh fa-spin fa-3x"></i>
    </div>
  ),

  loadFailed : function() {
    return (
      <div>
        {'Failed to load doc: ' + this.state.loadError.message}
      </div>
    );
  },

  render : function() {

    let renderer = this.loader;

    if (this.state.isLoaded) {
      if (this.state.loadError) {
        renderer = this.loadFailed();
      } else if (this.state.docType && this.state.docType.startsWith(contentTypeMarkdown)) {
        renderer = (<MarkdownRenderer content={this.state.documentContent} />);
      }
    }

    return (
      <div className="row">
        <div className="row">
          <div className="col s10 offset-s2 content">
            {renderer}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  },

});
