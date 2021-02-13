import mongoose from "mongoose";
import express from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import campaignRoutes from "./routes/campaignRoutes.js";

const app = express();

app.use('/campaigns ', campaignRoutes)
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors);

const CONNECTION_URL = "mongodb+srv://Project_Admin:Sc**byd00@cluster0.lxp4x.mongodb.net/campaignSchema2?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(PORT, () => {
        console.log(`🌎 ==> API server now on port ${PORT}!`)
    }))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)