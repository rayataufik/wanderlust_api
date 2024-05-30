const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.get('/', contentController.index);
router.get('/:id', contentController.show);

module.exports = router;
