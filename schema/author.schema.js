const { Schema, model } = require("mongoose")

const Author = new Schema({
    marka: {
        type: String,
        required: [true, "marka kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
        minLength: [3, "Kamida 3 ta harfdan iborat bolsin"],
        match: [/^[a-zA-Z]+$/, "faqat harf kiriting"],
    },
    tanirovka: {
        type: String,
        required: [true, "tanirovka kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
    },
    motor: {
        type: String,
        required: [true, "motor kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
    },
    year: {
        type: String,
        required: [true, "year kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
    },
    color: {
        type: String,
        required: [true, "color kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
    },
    distance: {
        type: String,
        required: [true, "distance kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
    },
    gearbook: {
        type: String,
        required: [true, "gearbook kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
    },
    description: {
        type: String,
        required: [true, "description kiritilishi shart"],
        unique: false,
        set: value => value.trim(),
    },
},
    {
        versionKey: false,
        timestamps: true
    }
)

const AuthorSchema = model("Author", Author)
module.exports = AuthSchema