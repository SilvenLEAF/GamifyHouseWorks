
import { NextFunction, Request, Response } from 'express';
import UserInterface from '../interfaces/databaseInterfaces/UserInterface';
import canUpdateHouseWork from '../permissions/canUpdateHouseWork';




export default (req: Request, res: Response, next: NextFunction)=>{
  const reqUser = req.user as UserInterface;
  const { houseWorkId } = req.body;

  // if they can not update their housework (I mean, if they do not have that permission)
  if(!canUpdateHouseWork(houseWorkId, reqUser)) return res.status(400).json({ msg: `You can NOT update this housework`, error: true });
  
  
  // if they have the permission to update the housework
  next();

}