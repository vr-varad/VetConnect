const express = require('express');
const router = express.Router();

const {login,register,docAuth,updateProfile} =  require('../controllers/doctorController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/login', login)
router.post('/register', register)
router.get('/', authMiddleware, docAuth)
router.put('/:id', authMiddleware, updateProfile)   


module.exports = router;