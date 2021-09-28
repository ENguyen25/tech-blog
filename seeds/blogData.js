const Posts = require('../models');

const blogdata = [
  {
    title: 'First post',
    content: 'OMG I am sooo excited to be coding my own blog',
  },
  {
    title: 'Second post',
    content: 'Slowly losing my patience :)',
  },
];

const blogPosts = () => Posts.bulkCreate(blogdata);

module.exports = blogPosts