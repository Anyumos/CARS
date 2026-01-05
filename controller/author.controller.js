const AuthorSchema = require("../schema/author.schema")
const CustomErrorHandler = require("../utils/custom-error-handler")

const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await AuthorSchema.find()

        res.status(200).json(authors)
    } catch (error) {
        next(error)
    }
}

const search = async (req, res, next) => {
    try {
        const { name } = req.query
        const searchingResult = await AuthorSchema.find({
            full_name: { $regex: name, $options: "i" }
        })

        res.status(200).json(searchingResult)
    } catch (error) {
        next(error)
    }
}

const addAuthor = async (req, res, next) => {
    try {
        const { marka, tanirovka, motor, year, color, distance, gearbook, description } = req.body;

        await AuthorSchema.create({ marka, tanirovka, motor, year, color, distance, gearbook, description })

        res.status(201).json({
            message: "Author added successfully"
        })
    } catch (error) {
        next(error)
    }
}

const getOneAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const author = await AuthorSchema.findById(id)

        if (!author) {
            throw CustomErrorHandler.NotFound("Author not found")
        }

        res.status(200).json({ author })
    } catch (error) {
        next(error)
    }
}

const updateAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const { marka, tanirovka, motor, year, color, distance, gearbook, description } = req.body
        const author = await AuthorSchema.findById(id)

        if (!author) {
            throw CustomErrorHandler.NotFound("Author not found")
        }

        await AuthorSchema.findByIdAndUpdate(id, { marka, tanirovka, motor, year, color, distance, gearbook, description },
            { new: true }
        )

        res.status(200).json({
            message: "Author updated"
        })
    } catch (error) {
        next(error)
    }
}

const deleteAuthor = async (req, res, next) => {
    try {
        const { id } = req.params
        const author = await AuthorSchema.findById(id)

        if (!author) {
            throw CustomErrorHandler.NotFound("Author not found")
        }

        await AuthorSchema.findByIdAndDelete(id)

        res.status(200).json({
            message: "Author deleted"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAuthors,
    addAuthor,
    getOneAuthor,
    updateAuthor,
    deleteAuthor,
    search
}