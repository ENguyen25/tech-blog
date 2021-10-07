const router = require('express').Router();
const { Posts, Users, Comment } = require('../models');

router.get('/', async (req, res) => {
    const dbBlogData = await Posts.findAll();

    const blogPosts = dbBlogData.map((posts) =>
        posts.get({ plain: true })
    );

    res.render('homepage', { blogPosts, logged_in: req.session.logged_in });
    // res.json({blogPosts});
});

router.get('/post/:id', async (req, res) => {
    const dbBlogData = await Posts.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: Comment,
          include: {
            model: Users,
            attributes: [ 'id', 'username']
          }
        }
    });

    const blogPosts = dbBlogData.get({ plain: true })

    res.render('blogposts', blogPosts);
    // res.json(blogPosts)
});

router.get('/login', async (req, res) => res.render('login'));

router.get('/signup', async (req, res) => res.render('signup'));

module.exports = router;
