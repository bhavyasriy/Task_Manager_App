const express = require("express");
require("./db/mongoose");

const app = express();
const port = process.env.PORT;
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// app.use((req, res, next) => {
//   if (req.method == "GET") {
//     res.send("GET requests are disabled");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Come back soon!!!");
// });

const multer = require("multer");
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000, //1MB
  },
  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return callback(new Error("Please upload .jpg or .jpeg or .png"));
    }
    callback(undefined, true);
  },
});

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send();
  }
);
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// Without middleware: new request -> run route handler
// With middleware   : new request -> do something ->run route handler

/*const bcrypt = require("bcryptjs");
const myFun = async () => {
  const pass = "Bhaavi";
  const hpass = await bcrypt.hash(pass, 8);
  console.log(pass);
  console.log(hpass);

  const isMatch = await bcrypt.compare("haavi", hpass);
  console.log(isMatch);
};
myFun();*/

app.listen(port, () => {
  console.log("Server is up " + port);
});

// const jwt = require("jsonwebtoken");

// const fun = async () => {
//   const token = jwt.sign({ _id: "abc123" }, "newcourse", {
//     expiresIn: "7 days",
//   });
//   console.log(token);
//   const data = jwt.verify(token, "newcourse");
//   console.log(data);
// };
// fun();

const Task = require("./models/task");
const User = require("./models/user");
// const main = async () => {
//   // const task = await Task.findById("5e88ad16b7647415e05f5f90");
//   // await task.populate("owner").execPopulate();
//   // console.log(task.owner);

//   const user = await User.findById("5e88a362f36ce33738ac1a36");
//   await user.populate("tasks").execPopulate();
//   console.log(user.tasks);
// };
// main();
