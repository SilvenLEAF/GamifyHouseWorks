import { Request, Response, NextFunction } from 'express';
import UserInterface from '../interfaces/databaseInterfaces/UserInterface';
import HouseWork from '../models/HouseWork';
import User from '../models/User';







/* ----------------------------------
.          GET ALL HOUSEWORKS
---------------------------------- */
export const get_all_house_works = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const reqUser = req.user as UserInterface;


    const allHouseWorks = await HouseWork.find({ ownerId: reqUser._id });

    if(!allHouseWorks[0]){
      res.json(null);      
    } else {
      res.json(allHouseWorks.reverse());

    }

  } catch (err) {
    next({err, req, res});
  }
}








/* ----------------------------------
.        CREATE NEW HOUSEWORK
---------------------------------- */
export const create_new_house_work = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    
    const reqUser = req.user as UserInterface;
    const { title, rank } = req.body;

    const newHouseWork = await HouseWork.create({
      title,
      rank,
      ownerId: reqUser._id,
      createdAt: new Date(),
    });

    res.json(newHouseWork);

  } catch (err) {
    next({err, req, res});
  }
}





/* ----------------------------------
.          UPDATE HOUSEWORK
---------------------------------- */
export const update_house_work = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const { houseWorkId } = req.body;

    await HouseWork.findByIdAndUpdate(houseWorkId, req.body);
    const updatedHouseWork = await HouseWork.findById(houseWorkId);

    
    res.json(updatedHouseWork);

  } catch (err) {
    next({err, req, res});
  }
}







/* ----------------------------------
.          DELETE HOUSEWORK
---------------------------------- */
export const delete_house_work = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    
    const { houseWorkId } = req.body;

    const deletedHouseWork = await HouseWork.findByIdAndRemove(houseWorkId);

    res.json(deletedHouseWork);

  } catch (err) {
    next({err, req, res});
  }
}








/* ----------------------------------
.          COMPLETE HOUSEWORK
---------------------------------- */
export const complete_house_work = async (req: Request, res: Response, next: NextFunction)=>{
  try {
    const reqUser = req.user as UserInterface;
    const { houseWorkId, score } = req.body;

    const user = await User.findById(reqUser._id);

    if(!user) return res.json({ msg: `Oops something went wrong!`, error: 'Server error!' })
    
    user.score += score;
    user.taskCompleted!++;

    await user.save();
    const levelledUpUser = await User.findById(reqUser._id);
    
    await HouseWork.findByIdAndRemove(houseWorkId);

    res.json(levelledUpUser);

  } catch (err) {
    next({err, req, res});
  }
}


