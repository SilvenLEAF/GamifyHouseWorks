import { NextFunction, Request, Response } from 'express';
import UserInterface from '../interfaces/databaseInterfaces/UserInterface';
import canDeleteHouseWork from '../permissions/canDeleteHouseWork';




export default (req: Request, res: Response, next: NextFunction)=>{
  const reqUser = req.user as UserInterface
  const { houseWorkId } = req.body;

  // if they can not delete the housework (I mean, if they do not have that permission)
  if(!canDeleteHouseWork(houseWorkId, reqUser)) return res.status(400).json({ msg: `You can NOT delete this housework`, error: true });
  
  
  // if they have the permission to delete the housework
  next();

}