const express = require('express');
const router = express.Router();

const {login,register,auth} =  require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/login', login)
router.post('/register', register)
router.get('/', authMiddleware, auth)


module.exports = router;