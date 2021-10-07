const Posts = require('./Posts');
const Users = require('./Users');
const Comment = require('./Comment');

Users.hasMany(Posts, {
    foreignKey: 'author_id',
})

Posts.belongsTo(Users, {
    foreignKey: 'author_id',
})

Users.hasMany(Comment, {
    foreignKey: 'author_id',
})

Comment.belongsTo(Users, {
    foreignKey: 'author_id',
})

Posts.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(Posts, {
    foreignKey: 'post_id'
})

module.exports = { Posts, Users, Comment }