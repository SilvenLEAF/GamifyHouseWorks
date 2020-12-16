const HouseWork = require('../models/HouseWork');
const User = require('../models/User');







/* ----------------------------------
.          GET ALL HOUSEWORKS
---------------------------------- */
module.exports.get_all_house_works = async (req, res, next)=>{
  try {
    const allHouseWorks = await HouseWork.find({ ownerId: req.user._id });

    if(!allHouseWorks[0]){
      res.json([0]);
      
    } else {
      res.json(allHouseWorks.reverse());

    }

  } catch (err) {
    next(err, req, res);
  }
}








/* ----------------------------------
.        CREATE NEW HOUSEWORK
---------------------------------- */
module.exports.create_new_house_work = async (req, res, next)=>{
  try {
    
    const { title, rank } = req.body;

    const newHouseWork = await HouseWork.create({
      title,
      rank,
      ownerId: req.user._id,
      createdAt: new Date(),
    });

    res.json(newHouseWork);

  } catch (err) {
    next(err, req, res);
  }
}





/* ----------------------------------
.          UPDATE HOUSEWORK
---------------------------------- */
module.exports.update_house_work = async (req, res, next)=>{
  try {
    const { houseWorkId } = req.body;

    await HouseWork.findByIdAndUpdate(houseWorkId, req.body);
    const updatedHouseWork = await HouseWork.findById(houseWorkId);

    
    res.json(updatedHouseWork);

  } catch (err) {
    next(err, req, res);
  }
}







/* ----------------------------------
.          DELETE HOUSEWORK
---------------------------------- */
module.exports.delete_house_work = async (req, res, next)=>{
  try {
    
    const { houseWorkId } = req.body;

    const deletedHouseWork = await HouseWork.findByIdAndRemove(houseWorkId);

    res.json(deletedHouseWork);

  } catch (err) {
    next(err, req, res);
  }
}








/* ----------------------------------
.          COMPLETE HOUSEWORK
---------------------------------- */
module.exports.complete_house_work = async (req, res, next)=>{
  try {
    
    const { houseWorkId, score } = req.body;

    const user = await User.findById(req.user._id)
    
    user.score += score;
    user.taskCompleted++;

    await user.save();
    const levelledUpUser = await User.findById(req.user._id);
    
    await HouseWork.findByIdAndRemove(houseWorkId);

    res.json(levelledUpUser);

  } catch (err) {
    next(err, req, res);
  }
}


