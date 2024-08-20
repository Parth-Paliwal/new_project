//14.139.241.203/32
import connectDB from "./db/data_connect.js";
import dotenv from 'dotenv';
dotenv.config({
    path: './env'
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log("this port is listning on port : "+process.env.PORT);
    })
})
.catch((err)=>{
    console.log("MongoDB connection error" , err);
});

// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.mongodb_url}/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.log("error : ",error);
//             throw error
//         })
//         app.listen(process.env.PORT , ()=>{
//             console.log("this port is listning on port : " + process.env.PORT);
//         })
//     } catch (error) {
//         console.error("Error : ",error );
//         throw err
//     }
// })()


