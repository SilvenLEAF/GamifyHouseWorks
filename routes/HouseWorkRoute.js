const router = require('express').Router();
const houseWorkController = require('../controllers/houseWorkController')

const isLoggedin = require('../middlewares/isLoggedin');
const UpdateHouseWork = require('../middlewares/UpdateHouseWork');
const DeleteHouseWork = require('../middlewares/DeleteHouseWork');





router.get('/all', isLoggedin, houseWorkController.get_all_house_works);
router.post('/', isLoggedin, houseWorkController.create_new_house_work);
router.put('/', isLoggedin, UpdateHouseWork, houseWorkController.update_house_work);
router.delete('/', isLoggedin, DeleteHouseWork, houseWorkController.delete_house_work);

router.post('/completed', isLoggedin, DeleteHouseWork, houseWorkController.complete_house_work);










module.exports = router