const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
//router.post('/addBook', )
router.post('/', homeController.postIndex)

module.exports = router