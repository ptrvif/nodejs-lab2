const store = require('../store')

module.exports = {
  // Get all comments for the post
  getComments(req, res) {
    let id = req.params.postId
    res.status(200).send(store.posts[id-1].comments)
  },

  // Add a new comment to the posts
  addComment(req, res) {
    let pId = req.params.postId - 1
    let id = store.posts[pId].comments.length + 1
    store.posts[pId].comments.push(req.body)
    res.status(201).send({id: id})
  },

  // Update existing comment
  updateComment(req, res) {
    let pId = req.params.postId - 1
    let cId = req.params.commentId - 1
    store.posts[pId].comments[cId].text = req.body.text
    res.status(200).send(req.body)
  },

  // Remove comment
  removeComment(req, res) {
    let pId = req.params.postId - 1
    let cId = req.params.commentId - 1
    store.posts[pId].comments.splice(cId, 1)
    res.status(204).send()
  }
}
