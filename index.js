const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();
// set up server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
      "http://localhost:3000",
      "https://xtrimcoder.herokuapp.com/",
    ],
    credentials: true,
  })
);
// connect to mongoDB

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MDB_CONNECT) 
.then(()=>{console.log('Mongodb connected')})
.catch((err)=>{console.log("Error in connection",err)});
// set up routes
app.use("/auth", require("./routers/userRouter"));
app.use("/ques", require("./routers/questionRouter"));
app.use("/dis", require("./routers/discussionRouter"));


// if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path=require("path");
  app.get('*', (req,res) => {
    res.sendFile(path.resolve( 'client', 'build','index.html'));
})
// }