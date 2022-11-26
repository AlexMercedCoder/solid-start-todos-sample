import mongoose from "mongoose"
import dotenv from "dotenv"

//get variables from .env
dotenv.config()

//connect to local mongoose server
mongoose.connect(process.env.MONGO_URI)

// connection messages
mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Connected to Mongoose"))
.on("error", (error) => console.log(error))

// todo model
const todoSchema = mongoose.Schema({
    message: String,
    done: Boolean
}, {timeStamps: true})

// OUR TODO MODEL
const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema)

export default Todo