const router = require('express').Router();
const Posts = require('../models');

router.get('/', async (req, res) => {
    const dbBlogData = await Posts.findAll();

    const blogPosts = dbBlogData.map((posts) =>
      posts.get({ plain: true })
    );

    res.render('homepage', {blogPosts});
});

router.get('/post/:id', async (req, res) => {
  const dbBlogData = await Posts.findByPk(req.params.id);

  const blogPosts = dbBlogData.get({ plain: true })

  res.render('blogposts', blogPosts);
});

router.get('/login', async (req, res) => res.render('login'));

router.get('/signup', async (req, res) => res.render('signup'));

router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const dbBlogData = await Posts.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.status(200).json(dbBlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;