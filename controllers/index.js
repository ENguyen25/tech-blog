const router = require('express').Router();
const homeRoutes = require('./home-routes');
const userRoutes = require('./api/post-routes');

router.use('/', homeRoutes);
router.use('/api', userRoutes);

module.exports = router;
