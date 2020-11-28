const HouseWork = require('../models/HouseWork');


module.exports = canDeleteAccount = async (houseWorkId, user)=>{

  const houseWork = await HouseWork.findById(houseWorkId);

  // user can only delete their own housework
  if(houseWork.ownerId == user._id) return true;
  
  
  //otherwise they can not
  return false;
}