const express = require('express');
const router = express.Router();

const auth = require('./tools/auth');
const login = require('./controllers/login');
const users = require('./controllers/users');

router.post('/api/login', login.loginUsers);
router.post('/api/users', users.createUsers);
router.patch('/api/users/:uid', users.updateUser);
router.delete('/api/users/:uid', users.removeUsers);

// router.use(auth);
router.get('/api/users', users.getAllUsers);

module.exports = router;
