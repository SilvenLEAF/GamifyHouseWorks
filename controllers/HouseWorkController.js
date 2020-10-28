const HouseWork = require('../models/HouseWork');









/* -----------------------------------
.   GET ALL HOUSEWORKS (of a user)
------------------------------------ */
module.exports.get_all_house_works_of_a_user = async (req, res, next)=>{
  try {

    const allHouseWorks = await HouseWork.find({ ownerId: req.user._id });

    /* this reverse() will give us the latest item on top of that array
    I mean, the newest item will be on the first place of that array */
    res.json(allHouseWorks.reverse());



  } catch (err) {
    next(err, req, res)
  }
}




























/* -----------------------------------
.        CREATE HOUSE WORK
------------------------------------ */
module.exports.create_house_work = async (req, res, next) =>{
  try {
    const newHouseWork = await HouseWork.create({
      ...req.body,

      ownerId: req.user._id,
      createdAt: new Date(),
    });

    
    // send back the New Housework
    res.json(newHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}



















/* -----------------------------------
.         DELETE HOUSEWORK
------------------------------------ */
module.exports.delete_house_work = async (req, res, next) =>{
  try {
    const { houseWorkId } = req.body;
    const deletedHouseWork = await HouseWork.findByIdAndDelete(houseWorkId);


    // send back the Deleted Housework
    res.json(deletedHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}























/* -----------------------------------
.        UPDATE HOUSE WORK
------------------------------------ */
module.exports.update_house_work = async (req, res, next) =>{
  try {
    const { houseWorkId } = req.body;
    await HouseWork.findOneAndUpdate(houseWorkId, req.body);
    const updatedHouseWork = await HouseWork.findById(houseWorkId);


    // send back the Updated Housework
    res.json(updatedHouseWork);

  } catch (err) {
    next(err, req, res)
  }
}