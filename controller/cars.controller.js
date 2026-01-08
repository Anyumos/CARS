const CarsSchema = require("../schema/cars.schema")
const CustomErrorHandler = require("../utils/custom-error-handler")

const getAllCars = async (req, res, next) => {
    try {
        const cars = await CarsSchema.find()

        res.status(200).json(cars)
    } catch (error) {
        next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const { name } = req.query
        const searchingResult = await CarsSchema.find({
            marka: { $regex: name, $options: "i" }
        })

        res.status(200).json(searchingResult)
    } catch (error) {
        next(error)
    }
}

const addCar = async (req, res, next) => {
    try {
        const { marka, tanirovka, motor, year, color, distance, gearbook, description } = req.body;

        await CarsSchema.create({ marka, tanirovka, motor, year, color, distance, gearbook, description })
        res.status(201).json({
            message: "Car added successfully"
        })
    } catch (error) {
        next(error)
    }
}

const getOneCar = async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await CarsSchema.findById(id)

        if (!car) {
            throw CustomErrorHandler.NotFound("Car not found")
        }

        res.status(200).json({ car })
    } catch (error) {
        next(error)
    }
}

const updateCars = async (req, res, next) => {
    try {
        const { id } = req.params
        const { marka, tanirovka, motor, year, color, distance, gearbook, description } = req.body
        const car = await CarsSchema.findById(id)
        if (!car) {
            throw CustomErrorHandler.NotFound("Car not found")
        }

        await CarsSchema.findByIdAndUpdate(id, { marka, tanirovka, motor, year, color, distance, gearbook, description },
            { new: true }
        )

        res.status(200).json({
            message: "Car updated"
        })
    } catch (error) {
        next(error)
    }
}

const deleteCar = async (req, res, next) => {
    try {
        const { id } = req.params
        const car = await CarsSchema.findById(id)

        if (!car) {
            throw CustomErrorHandler.NotFound("Car not found")
        }

        await CarsSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "Car deleted"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllCars,
    addCar,
    getOneCar,
    updateCars,
    deleteCar,
    search
}