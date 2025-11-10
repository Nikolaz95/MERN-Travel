import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDataBase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/errors.js";
import cookieParser from "cookie-parser";
import path from "path";


import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env variables
let envPath = process.env.NODE_ENV === "PRODUCTION"
    ? path.join(__dirname, ".env.production")
    : path.join(__dirname, "config/config.env");

dotenv.config({ path: envPath });

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down  due to uncaught exceptions`);
    process.exit(1);
})

/* console.log(hello); */


/* dotenv.config({ path: "backend/config/config.env" }); */

//connecting to database
connectDataBase();

// JSON request bodies
app.use(express.json({ limit: "10mb" }));
// cookieParser
app.use(cookieParser());

//import all routes
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js"
import newVisitingRoutes from "./routes/newVisiting.js"


app.use("/api", productRoutes)
app.use("/api", authRoutes)
app.use("/api", newVisitingRoutes)


//connecting backend and frontend
if (process.env.NODE_ENV === "PRODUCTION") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
    });
}

//using error middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;



const server = app.listen(PORT, () => {
    console.log(`Server start on PORT: ${PORT} in ${process.env.NODE_ENV} mode.`);
});

//handle unhandle promise promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err}`);
    console.log(`Shutting down server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});