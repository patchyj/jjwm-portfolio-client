/* eslint-disable react/no-did-update-set-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlogList from './BlogList';
import * as postActions from '../../../actions/posts/postActions';

class BlogContainer extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     posts: []
  //   };
  // }

  componentDidMount() {
    const { actions } = this.props;

    actions.postActions.getPosts();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.posts.posts.length !== this.props.posts.posts.length) {
  //     const { posts } = this.props.posts;
  //     this.setState({ posts });
  //   }
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.posts.posts !== prevState.posts.posts) {
  //     return { path: nextProps.posts.posts };
  //   }
  //   return null;
  // }

  render() {
    // eslint-disable-next-line react/prop-types
    const { posts: { posts } } = this.props;
    return (
      <div>
        <h1 className="display-4">Blog</h1>
        <BlogList posts={posts} />
      </div>
    );
  }
}

BlogContainer.propTypes = {
  actions: PropTypes.shape({ getPosts: PropTypes.func }).isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    errors: state.errors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      postActions: bindActionCreators(postActions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogContainer);
