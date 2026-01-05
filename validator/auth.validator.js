const Joi = require("joi")

exports.AuthValidator = function (data) {
    try {
        const schema = Joi.object({
            username: Joi.string().pattern(new RegExp(/^[a-zA-Z]{3,}$/)).min(3).required(),
            email: Joi.string().email().min(15).required(),
            password: Joi.string().min(8).required(),
            roles: Joi.string().lowercase().valid("superadmin", "admin", "user").required(),
            otp: Joi.string().min(4).required(),
            isVerified: Joi.boolean().required(),
            otpTime: Joi.number().required(),
        })

        return schema.validate(data)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}