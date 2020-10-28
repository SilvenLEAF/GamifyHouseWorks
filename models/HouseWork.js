const mongoose = require('mongoose');






const HouseWorkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  reward: {
    type: Number,
    required: true
  },



  ownerId: {
    type: String,
    required: true,

  },
  createdAt: String
})







module.exports = HouseWork = mongoose.model('HouseWork', HouseWorkSchema)