import * as _ from 'lodash'

export default function posts (state, action = null) {
  switch (action.type) {
    case 'UPVOTE' : {
      console.log(state)
      var result = _.cloneDeep(state)
      var post = result[action.postId]
      var votes = parseInt(post.votes)
      post.votes = votes + 1
      return result
    }
    case 'DOWNVOTE' : {
      var result = _.cloneDeep(state)
      var post = result[action.postId]
      var votes = parseInt(post.votes)
      post.votes = votes - 1
      return result
    }
    case 'ADD_POST' : {
      var result = _.cloneDeep(state)
      console.log(state);
      result[action.post.postId] = action.post
      return result
    }
    default :
      return state
  }
}