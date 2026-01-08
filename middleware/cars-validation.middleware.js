const CustomErrorHandler = require("../utils/custom-error-handler")
const { CarsValidator } = require("../validator/cars.validator")

module.exports = function (req, res, next) {
    const { error } = CarsValidator(req.body)

    if (error) {
        throw CustomErrorHandler.BadRequest(error.message)
    }

    next()
}