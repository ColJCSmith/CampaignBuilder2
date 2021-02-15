import mongoose from "mongoose";
import express from "express";
import cors from 'cors'
import campaignRoutes from "./routes/campaignRoutes.js";

const corsOptions = {
    origin: "http://localhost:3000/",
};

const app = express();

// app.use(cors(corsOptions));



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use('/campaigns', campaignRoutes)
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const CONNECTION_URL = "mongodb+srv://Project_Admin:Sc**byd00@cluster0.lxp4x.mongodb.net/campaignSchema?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(PORT, () => {
        console.log(`🌎 ==> API server now on port ${PORT}!`)
    }))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)