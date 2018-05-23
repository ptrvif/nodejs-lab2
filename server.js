const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const store = require('./store')

const routes = require('./routes')
const middle = require('./middle')

// Home page
const homePage =
  '<h1>Welcome to My Blog</h1><br>' +
  '<h2>Use REST APIs to send requests</h2><br>' +
  '<h3>For working with posts:</h3>' +
  '<ul><li>GET and POST /posts</li><li>PUT and DELETE /posts/:postId/</li></ul>' +
  '<h3>For working with comments:</h3>' +
  '<ul><li>GET and POST /posts/:postId/comments</li><li>PUT and DELETE /posts/:postId/comments/:commentId/</li></ul>'

//console.log('Routes: ' , routes)

let app = express()

// add standard middlewares
app.use(logger('dev'))
app.use(errorhandler())
app.use(bodyParser.json())

// Custom middleware to validate postId
app.use('/posts/:postId+', (req, res, next) => middle.validatePost(req, res, next))

// Custom middleware to validate commentId
app.use('/posts/:postId+/comments/:commentId+', (req, res, next) => middle.validateComment(req, res, next))

// Show home page for GET root
app.get('/', (req, res) => {
  res.send(homePage)
})

// Add posts routes
app.get('/posts', (req, res) => routes.posts.getPosts(req, res))
app.post('/posts', (req, res) => routes.posts.addPost(req, res))
app.put('/posts/:postId', (req, res) => routes.posts.updatePost(req, res))
app.delete('/posts/:postId', (req, res) => routes.posts.removePost(req, res))

// Add comments routes
app.get('/posts/:postId/comments', (req, res) => routes.comments.getComments(req, res))
app.post('/posts/:postId/comments', (req, res) => routes.comments.addComment(req, res))
app.put('/posts/:postId/comments/:commentId', (req, res) => routes.comments.addComment(req, res))
app.delete('/posts/:postId/comments/:commentId', (req, res) => routes.comments.removeComment(req, res))

app.listen(3000)
