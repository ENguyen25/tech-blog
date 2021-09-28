const router = require('express').Router();
const Posts = require('../models');

router.get('/', async (req, res) => {
    const dbBlogData = await Posts.findAll();

    const blogPosts = dbBlogData.map((posts) =>
      posts.get({ plain: true })
    );

    res.render('homepage', {blogPosts});
});

module.exports = router;