const router = require('express').Router();
const houseWorkController = require('../controllers/houseWorkController')

const isLoggedin = require('../middlewares/isLoggedin');






router.get('/all', isLoggedin, houseWorkController.get_all_house_works);
router.post('/', isLoggedin, houseWorkController.create_new_house_work);
router.put('/', isLoggedin, houseWorkController.update_house_work);
router.delete('/', isLoggedin, houseWorkController.delete_house_work);











module.exports = router