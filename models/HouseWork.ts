import mongoose, { Schema } from 'mongoose'
import HouseWorkInterface from '../interfaces/databaseInterfaces/HouseWorkInterface';




/* ------------------------------------------
.                MAIN SCHEMA
------------------------------------------ */
const HouseWorkSchema: Schema = new mongoose.Schema({
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

});







/* ------------------------------------------
.                HouseWork MODEL
------------------------------------------ */
export default mongoose.model<HouseWorkInterface>('HouseWork', HouseWorkSchema);