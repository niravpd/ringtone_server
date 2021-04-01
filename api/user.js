const express =require("express");
const usersController=require("../controller/user");

const usersRouter = express.Router()

usersRouter
    .route("/")
    .get(usersController.getAll)
    .post(usersController.createNewUser);
usersRouter
    .route("/:id")
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports=usersRouter;