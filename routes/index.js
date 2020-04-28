const express = require('express');
const router = module.exports = express.Router();

router.use(require('./api/users'));
router.use(require('./api/workouts'));
router.use(require('./api/exercises'));
router.use(require('./api/auth/register'));
router.use(require('./api/auth/login'));