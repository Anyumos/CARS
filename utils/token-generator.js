const jwt = require('jsonwebtoken')
const CustomErrorHandler = require('./custom-error-handler')

const accessToken = (payload) => {
    try {
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' })
    } catch (error) {
        throw CustomErrorHandler.BadRequest(error.message)
    }
}

const refreshToken = (payload) => {
    try {
        return jwt.sign(payload, process.env.REFRESH_SECRET_KEY, { expiresIn: '15d' })
    } catch (error) {
        throw CustomErrorHandler.BadRequest(error.message)
    }
}

module.exports = {
    accessToken,
    refreshToken
}