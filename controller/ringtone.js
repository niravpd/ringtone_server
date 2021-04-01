const Ringtone =require("../models/RingtoneSchema");

const updateRingtone = async (req, res) => {
    try {
        const _id = req.params.id;
        await Ringtone.findByIdAndUpdate({_id}, req.body);
        res.status(200).send("Ringtone updated successfully")
    } catch (err) {
        console.log("Error", err)
        res.status(422).send({error: "Error while updating ringtone"})
    }
}

const getRingtone = async (req, res) => {
    try {
        const _id = req.params.id;
        const ringtone = await Ringtone.findOne({_id:req.params.id});
        res.status(200).send({success: true, message: (ringtone ? ringtone:"ringtone not found") || {}})
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting ringtone details"})
    }
};
const getAll = async (req, res) => {
    try {
        const ringtone = await Ringtone.find();
        res.status(200).send({success: true, message: (ringtone ? ringtone:"ringtone list is empty")})
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting ringtone details"})
    }
};

const createNewRingtone = async (req, res) => {
    try {
        console.log("Created Successfully");
        const ringtone = await Ringtone.create(req.body);
        res.status(200).send({message: "Ringtone created successfully.", ringtone})
    } catch (err) {
        console.log(err);
        res.status(422).send({success: false, message: err.message})
    }
};

const deleteRingtone = async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findOneAndRemove({ _id });
        res.status(200).send({success: true, message: (user ? "ringtone deleted successfully":"user not found") || {}})
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user details"})
    }
};
module.exports={
    getAll,
    updateRingtone,
    getRingtone,
    createNewRingtone,
    deleteRingtone
};
