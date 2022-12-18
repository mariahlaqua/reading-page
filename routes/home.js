// process requests using these controller methods

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)
router.post('/addBook', homeController.addBook)
router.post('/', homeController.postIndex)

module.exports = router