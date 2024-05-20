const express = require('express');
const router = express.Router();

const {login,register,docAuth} =  require('../controllers/doctorController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/login', login)
router.post('/register', register)
router.get('/', authMiddleware, docAuth)


module.exports = router;