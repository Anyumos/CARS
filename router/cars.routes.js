const { Router } = require("express")
const authorValidationMiddleware = require("../middleware/cars-validation.middleware")
const authorization = require("../middleware/authorization")

const carRouter = Router()

carRouter.get("/get_all_cars", getAllCars)
carRouter.get("/search", search)
carRouter.post("/add_car", authorValidationMiddleware, authorization, addCar)
carRouter.get("/get_one_car/:id", getOneCar)
carRouter.put("/update_car/:id", updateCars)
carRouter.delete("/delete_car/:id", deleteCar)


module.exports = carRouter