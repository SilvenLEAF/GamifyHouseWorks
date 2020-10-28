const router = require('express').Router();
const userController = require('../controllers/userController');






// -------------------------GET LOGGED IN USER
router.get('/', (req, res, next)=>{
  res.json({ user: req.user });
});







router.get('/all', userController.get_all_users);
router.delete('/', userController.delete_account);
router.put('/', userController.update_account);














module.exports = router;