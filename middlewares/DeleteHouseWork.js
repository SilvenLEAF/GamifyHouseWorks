const canDeleteHouseWork = require('../permissions/canDeleteHouseWork');




module.exports = UpdateHouseWork = (req, res, next)=>{
  const { houseWorkId } = req.body;

  // if they can not delete the housework (I mean, if they do not have that permission)
  if(!canDeleteHouseWork(houseWorkId, req.user)) return res.status(400).json({ msg: `You can NOT delete this housework`, error: true });
  
  
  // if they have the permission to delete the housework
  next();

}