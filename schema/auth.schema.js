const { Schema, model } = require("mongoose")

const Auth = new Schema({
    username:
    {
        type: String,
        required: [true, "username kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
        minLength: [3, "Kamida 3 ta harfdan iborat bolsin"],
        match: [/^[a-zA-Z]+$/, "faqat harf kiriting"],
    },
    email: {
        type: String,
        required: [true, "email kiritilishi shart"],
        unique: true,
        set: value => value.trim(),
        minLength: [15, "Kamida 15 ta belgidan iborat bolsin"],
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email noto'g'ri formatda"],
    },
    password: {
        type: String,
        required: [true, "password kiritilishi shart"],
        set: value => value.trim(),
        minLength: [8, "Kamida 8 ta belgidan iborat bolsin"],
    },
    roles: {
        type: String,
        set: value => value.trim().toLowerCase(),
        enum: {
            values: ["superadmin", "admin", "user"],
            message: `{VALUE} bunday qiymat qabul qilinmaydi`
        },
        default: "user"
    },
    otp: {
        type: String,
        default: null,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    otpTime: {
        type: Number,
        default: null,
    },
},
    {
        versionKey: false,
        timestamps: true
    }
)

const AuthSchema = model("Auth", Auth)
module.exports = AuthSchema