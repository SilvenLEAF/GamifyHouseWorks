import mongoose, { Document } from 'mongoose'







/* ------------------------------------------
.            MAIN INTERFACE
------------------------------------------ */
export default interface HouseWorkInterface extends Document {
    title: string,

    rank: string,

    ownerId: string,
    createdAt: Date,
}

