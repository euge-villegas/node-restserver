import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    mail: {
        type: String,
        required: [true, 'Email is mandatory'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is mandatory']
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false
    },
    // uid: {
    //     type: String,
    // }
});

userSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

export default model("Users", userSchema);