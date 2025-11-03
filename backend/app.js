import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDataBase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down  due to uncaught exceptions`);
    process.exit(1);
})

/* console.log(hello); */


dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDataBase();

app.use(express.json());

// cookieParser
app.use(cookieParser());

//import all routes
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js"
import newVisitingRoutes from "./routes/newVisiting.js"


app.use("/api", productRoutes)
app.use("/api", authRoutes)
app.use("/api", newVisitingRoutes)




//using error middleware
app.use(errorMiddleware);



const server = app.listen(process.env.PORT, () => {
    console.log(`Server start on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

//handle unhandle promise promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});