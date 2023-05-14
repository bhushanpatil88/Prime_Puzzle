const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({origin: true, credentials: true}));



const db = require("./models");



//Routers
const userRoute = require("./routes/User")
app.use("/",userRoute);
const questionRoute = require("./routes/Question")
app.use("/",questionRoute)


db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});