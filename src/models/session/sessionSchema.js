import mongoose from 'mongoose'

const sessionSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    associate: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default mongoose.model("Session", sessionSchema)