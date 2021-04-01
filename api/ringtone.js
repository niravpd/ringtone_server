const express =require("express");
const ringtonesController=require("../controller/ringtone");

const ringtonesRouter = express.Router();

ringtonesRouter
    .route("/")
    .get(ringtonesController.getAll)
    .post(ringtonesController.createNewRingtone);

ringtonesRouter
    .route("/:id")
    .get(ringtonesController.getRingtone)
    .put(ringtonesController.updateRingtone)
    .delete(ringtonesController.deleteRingtone);

module.exports=ringtonesRouter;