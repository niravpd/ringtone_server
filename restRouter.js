const express =require("express");
const usersRouter= require("./api/user");
const ringtoneRouter= require("./api/ringtone");

const restRouter = express.Router();

// The authorization routes go here Api Routs
restRouter.use("/user", usersRouter);
restRouter.use("/ringtone", ringtoneRouter);
module.exports=restRouter;