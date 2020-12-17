import HouseWorkInterface from '../interfaces/databaseInterfaces/HouseWorkInterface';
import UserInterface from '../interfaces/databaseInterfaces/UserInterface';
import HouseWork from '../models/HouseWork';




export default async (houseWorkId: any, user: UserInterface)=>{

  const houseWork = await HouseWork.findById(houseWorkId) as HouseWorkInterface;

  // user can only update their own housework
  if(houseWork.ownerId == user._id) return true;
  
  
  //otherwise they can not
  return false;
}