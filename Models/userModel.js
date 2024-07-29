import mongoose from "mongoose";

const user = mongoose.model("user", mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phonNumber: {
        type: Number,
    },
    education: {
        type: String,
    },
    gender: {
        type: String,
    },
    education: {
        type: String,
    },
    password: {
        type: String,
    },
}))

export default user