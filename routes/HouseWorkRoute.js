const router = require('express').Router();
const HouseWorkController = require('../controllers/HouseWorkController')





router.get('/all', HouseWorkController.get_all_house_works_of_a_user);




router.post('/', HouseWorkController.create_house_work);
router.delete('/', HouseWorkController.delete_house_work);
router.put('/', HouseWorkController.update_house_work);







module.exports = router