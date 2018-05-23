const store = require('../store')

module.exports =
  // Get all comments
  function validateComment(req, res, next) {
    let pId = req.params.postId
    let cId = req.params.commentId
    if(!store.posts[pId-1].comments[cId-1]) {
      res.status(404).send({Message: `Comment with ID: ${cId} not found for post ${pId}`})
    }
    else {
      next()
    }
  }
