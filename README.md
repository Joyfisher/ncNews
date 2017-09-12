# ncNews
Northcoders News


Northcoders News is a social news aggregation, web content rating, and discussion website. It is a clone of Reddit built using Mongo, Express, React, Bulma, Javascript, HTML and CSS.

Instructions

Open three terminals.
In terminal #1, run mongod.
In terminal #2, type cd server, then npm run start.
The API is now accessible on port 3000.
In terminal #3, type cd front-end, then npm run dev.
The front-end is now accessible on port 9090.


Northcoders News API - Backend
The below are all model methods that I call on the models.

find
findOne
findOneAndUpdate
findOneAndRemove
findById
findByIdAndUpdate
findByIdAndRemove
update


Northcoders News Front-End

Below are all of the axios requests that I will send to CRUD the backend
	
GET /api/topics	Get all the topics
GET /api/topics/:topic_id/articles	Return all the articles for a certain topic
GET /api/articles	Returns all the articles
GET /api/articles/:article_id/comments	Get all the comments for a individual article
POST /api/articles/:article_id/comments	Add a new comment to an article. This route requires a JSON body with a comment key and value pair 
PUT /api/articles/:article_id	Increment or Decrement the votes of an article by one. This route requires a vote query of 'up' or 'down' 
PUT /api/comments/:comment_id	Increment or Decrement the votes of a comment by one. This route requires a vote query of 'up' or 'down' 
DELETE /api/comments/:comment_id	Deletes a comment
GET /api/users/:username	Returns a JSON object with the profile data for the specified user.
