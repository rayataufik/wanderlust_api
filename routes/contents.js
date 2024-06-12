const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

router.get('/', contentController.index);
router.get('/:id', contentController.show);
router.post('/create', contentController.create);
router.put('/:id', contentController.update);
router.delete('/:id', contentController.delete)

module.exports = router;
