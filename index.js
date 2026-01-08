const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.config');
const errorMiddleware = require('./middleware/error.middleware');
const authRouter = require('./router/auth.routes');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const carRouter = require('./router/cars.routes');


const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

connectDB();


// router
app.use(authRouter)
app.use(carRouter)


app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log("Server is running on port" + PORT)
})