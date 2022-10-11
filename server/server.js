require("dotenv").config();
const express = require("express");
const cors = require("cors");

// const PORT = 5002;
// const CLIENT = "http://localhost:3000";

const app = express();
app.use(cors());

app.use(express.json());
const http = require("http").createServer(app);

const usersRouter = require("./routes/user");
app.use("/", usersRouter);

http.listen(process.env.PORT || 5002, () => {
  // console.log(`Server is running on port ${PORT}`);
});
