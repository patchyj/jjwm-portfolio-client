/* eslint-disable react/no-did-update-set-state */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BlogList from "./BlogList";
import * as postActions from "../../../actions/posts/postActions";

class BlogContainer extends Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.postActions.getPosts();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { posts: { posts } } = this.props;

    return (
      <div>
        <h1 className="display-4 text-center">Blog</h1>
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
