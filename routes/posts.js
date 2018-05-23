const store = require('../store')

module.exports = {

  // Get all posts
  getPosts(req, res) {
    res.status(200).send(store.posts)
  },

  // Add a new post
  addPost(req, res) {
    let post = req.body
    post.comments = []
    let id = store.posts.length + 1
    store.posts.push(post)
    res.status(201).send({id: id})
  },

  // Update existing post
  updatePost(req, res) {
    let id = req.params.postId
    store.posts[id-1].name = req.body.name
    store.posts[id-1].text = req.body.text
    res.status(200).send(store.posts[id-1])
  },

  // Delete post
  removePost(req, res) {
    let id = req.params.postId
    store.posts.splice(id-1, 1)
    res.status(204).send()
  }
}
