import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({ 
    origin : process.env.CROS_ORIGIN,
    credentials : true
}))

app.use(express.json({ limit : "16Kb" }))
//extended used to nested object;
app.use(express.urlencoded({extended : true , limit : "16kb"})) 

app.use(express.static("public"))//public assits to store file ,image 

app.use(cookieParser());



export {app};
