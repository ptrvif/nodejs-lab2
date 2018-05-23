# Module 2 lab assignment

## Design

This is simple WEB application implemented with Express framework.
The project main file is server.js

Supported routes are implemented inside 'routes' sub-folder

Routes for posts API are implemented in ./routes/posts.js
Routes for comments API are implemented in ./routes/comments.js

This application uses 3 npm middleware packages:
* morgan (for logging)
* body-parser (for converting requests and responses to JSON)
* errorhandler (for errors handling)

Also, this application implements 2 custom middleware packages located in './middle' subfolder:
* validate-post (validates that the correct postId is sent in the path, otherwise returns 404 response)
* validate-comment (validates that the correct commentId is sent in the path, otherwise returns 404 response)
Separating this logic into middleware packages allowed to re-use the same validation logic for different routes,
hence the code is clean and well organized.
This logic was added to only particular routes (where it is needed) by using regex expressions for route, like:
````javascript
app.use('/posts/:postId+/comments/:commentId+', ...)
````

## Testing
Application was tested with Postman tool.
Complete Postman collection, exported in JSON format, can be found in project root folder: postman_collection.json

You can import it in your Postman and execute requests separately or run the entire collection.
 
