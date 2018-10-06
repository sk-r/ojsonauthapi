var postsRoute = require("./db/posts.json");
var commentsRoute = require("./db/comments.json");
var oauthRoute = require("./db/oauth.json");

module.exports = function(){
    return {
        posts: postsRoute,
        comments: commentsRoute,
        oauth: oauthRoute
    }
}