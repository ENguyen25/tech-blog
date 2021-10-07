const router = require('express').Router();
const postRoutes = require('./post-routes');
const userRoutes = require('./post-routes');

router.use('/', postRoutes);
router.use('/user', userRoutes);

module.exports = router;
