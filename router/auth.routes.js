const { Router } = require("express")
const { register, login, verify, logout, resendOtp, forgetPassword } = require("../controller/auth.controller")
const refreshToken = require("../middleware/refresh-token")
const authValidationMiddleware = require("../middleware/auth-validation.middleware")

const authRouter = Router()

authRouter.post("/register", authValidationMiddleware, register)
authRouter.post("/verify", verify)
authRouter.post("/login", login)
authRouter.get("/refresh", refreshToken)
authRouter.get("/logout", logout)
authRouter.post("/resend_otp", resendOtp)
authRouter.post("/forget_password", forgetPassword)
module.exports = authRouter