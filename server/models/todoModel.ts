import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    label: {
        type: String,
        required: [true, 'Enter the label '],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Enter the description '],
        trim: true
    }
},{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

});

export default mongoose.model('User1', userSchema)