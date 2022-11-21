import mongoose from "mongoose";
import mangoose, { Schema } from "mongoose";

const userSchema = new mangoose.Schema({
    email: {
        type: String,
        required:[true,''],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Enter the Password '],
        trim: true,
        min:[6,'Password must be at least 6 characters'],
    },

}, { timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}});

export default mongoose.model('User',userSchema)