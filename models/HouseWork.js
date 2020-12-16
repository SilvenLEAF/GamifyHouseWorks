const mongoose = require('mongoose');





/* ----------------------------------
.         HouseWork Schema
---------------------------------- */
const HouseWorkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  rank: {
    type: String,
    required: true,
  },

  ownerId: String,
  createdAt: {
    type: String,
  }

})





/* ----------------------------------
.         HouseWork model
---------------------------------- */
module.exports = HouseWork = mongoose.model('HouseWork', HouseWorkSchema);