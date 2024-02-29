import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
// import { Problem } from "./models/problemModel.js";
import cors from 'cors';
import problemsRoute from "./routes/problemsRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to 7078 Backend");
});

app.use('/problems', problemsRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })