const CustomErrorHandler = require("../utils/custom-error-handler");
const jwt = require("jsonwebtoken");
const { accessToken } = require("../utils/token-generator");

module.exports = function (req, res, next) {
    try {
        const refresh_token = req.cookies.refresh_token;

        if (!refresh_token) {
            throw CustomErrorHandler.Unauthorized("Refresh token not found");
        }

        const decode = jwt.verify(refresh_token, process.env.SECRET_KEY);

        const payload = {
            username: decode.username,
            email: decode.email,
            role: decode.role,
            id: decode._id
        }

        const access_token = accessToken(payload);

        res.cookie('access_token', access_token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 15
        });

        return res.status(200).json({
            message: "Verified successfully",
            access_token,
        });
    } catch (error) {
        next(error)
    }
}