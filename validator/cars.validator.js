const Joi = require("joi")

exports.CarsValidator = function (data) {
    try {
        const schema = Joi.object({
            marka: Joi.string().pattern(new RegExp(/^[a-zA-Z]+$/)).min(3).required(),
            tanirovka: Joi.string().min(1).required(),
            motor: Joi.string().min(1).required(),
            year: Joi.string().min(1).required(),
            color: Joi.string().min(1).required(),
            distance: Joi.string().min(1).required(),
            gearbook: Joi.string().min(1).required(),
            description: Joi.string().min(1).required(),
        })

        return schema.validate(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}