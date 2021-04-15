const express = require('express');
const router = express.Router();
const plantsCtrl = require('../../controllers/plants');

router.get('/', plantsCtrl.index);
router.post('/', plantsCtrl.create);
router.delete('/:id', plantsCtrl.delete);
router.get('/:id', plantsCtrl.show);

module.exports = router;