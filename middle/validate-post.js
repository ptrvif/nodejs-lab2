const store = require('../store')

module.exports =   // Get all posts
  function validatePost(req, res, next) {
    let id = req.params.postId
    if(!id || !store.posts[id-1]) {
      res.status(404).send({Message: `Post for ID: ${id} not found`})
    }
    else {
      next()
    }
  }
