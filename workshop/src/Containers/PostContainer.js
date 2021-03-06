import { connect } from 'react-redux'
import { upVote, downVote } from '../actions'
import PostList from '../Components/PostList'

function mapStateToProps(state) {
  return {
    posts: state.posts,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upVote: (postId) => {
      dispatch(upVote(postId))
    },
    downVote: (postId) => {
      dispatch(downVote(postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)