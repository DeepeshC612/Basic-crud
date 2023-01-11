const express = require('express')
const router = express.Router()
const user = require('../controllers/userControllers')


router.get('/', user.getUser)
router.post('/Create', user.createUser)
router.patch('/update/:id', user.updateUser)
router.delete('/delete/:id', user.deleteUser)

module.exports = router