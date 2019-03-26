import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Post List
        <button>Nothing</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

// export default connect(mapStateToProps, { selectedPost })(PostList);
export default connect(null, { fetchPosts })(PostList);