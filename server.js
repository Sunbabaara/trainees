const express= require("express");
const dotenv =require("dotenv");
const morgan = require("morgan");
const connectDB= require("./config/connectDB");
const traineesRoute =require("./routes/traineesRoute");
const usersRoute =require("./routes/usersRoutes");


dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/trainees", traineesRoute)
app.use("/api/v1/users", usersRoute)

//home 
app.get ("/", (req, res)=> {
    res.send("<h1>welcome to our trainees API</h1>");

})

const port =process.env.PORT || 5000

app.listen(port, ()=>
console.log (`server is running ${port}`))
