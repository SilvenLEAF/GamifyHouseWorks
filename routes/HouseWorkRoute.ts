import { Router } from 'express';
import * as houseWorkController from '../controllers/houseWorkController';

import isLoggedin from '../middlewares/isLoggedin';
import UpdateHouseWork from '../middlewares/UpdateHouseWork';
import DeleteHouseWork from '../middlewares/DeleteHouseWork';





const router = Router();



router.get('/all', isLoggedin, houseWorkController.get_all_house_works);
router.post('/', isLoggedin, houseWorkController.create_new_house_work);
router.put('/', isLoggedin, UpdateHouseWork, houseWorkController.update_house_work);
router.delete('/', isLoggedin, DeleteHouseWork, houseWorkController.delete_house_work);

router.post('/completed', isLoggedin, DeleteHouseWork, houseWorkController.complete_house_work);










export default router