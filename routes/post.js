const express =  require('express');
const router = express.Router();

const postCtrl = require('../controllers/post');

router.get('/', postCtrl.getAllPosts);

router.post('/add', postCtrl.addOnePost);

router.post('/delete/:id', postCtrl.removeOnePost);

router.get('/:id', postCtrl.getOnePost);

router.put('/update/:id', postCtrl.updateOne);

module.exports = router;