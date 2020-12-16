const canUpdateHouseWork = require('../permissions/canUpdateHouseWork');




module.exports = UpdateHouseWork = (req, res, next)=>{
  const { houseWorkId } = req.body;

  // if they can not update their housework (I mean, if they do not have that permission)
  if(!canUpdateHouseWork(houseWorkId, req.user)) return res.status(400).json({ msg: `You can NOT update this housework`, error: true });
  
  
  // if they have the permission to update the housework
  next();

}