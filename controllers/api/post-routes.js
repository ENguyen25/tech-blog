const router = require('express').Router();
const { Posts, Users, Comment } = require('../../models');
const withAuth = require('../../util/auth');

// create new blog post
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

// post comments to blog
router.post('/post/:id', async (req, res) => {
  const user = req.session
  
  try {
    if (!user){
      console.log('help in trouble')
      res
        .status(400)
        .redirect('/login', {message: 'please login to make a new post'})
    }
    else {
      console.log('post route working')
      const commentData = await Comment.create({
        comment_entry: req.body.comment_entry,
        post_id: req.body.post_id
    })
      res
        .status(200)
        .json(commentData)
    }
  } catch (err) {
    console.log(err)
  }
});

// delete blog post
router.delete('/post/:id', async (req, res) => {
  try {
    const dbBlogData = await Posts.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(dbBlogData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update blog post
router.put('/post/:id', async (req, res) => {
  try {
    const dbBlogData = await Posts.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(dbBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;