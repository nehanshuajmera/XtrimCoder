const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT=process.env.PORT||5000;
app.use(cors({ credentials: true, origin: PORT }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);
const URI = process.env.MONGODB_URL;

// to deploy
    app.use(express.static("build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve('build','index.html'));
    })

mongoose.connect(    URI  )  .then(() => {
    app.listen(PORT);
    console.log("Database is connected! Listening to localhost :",PORT);
  })
  .catch((err) => console.log(err));