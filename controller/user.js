const User =require("../models/UserSchema");

const updateUser = async (req, res) => {
    try {
        const _id = req.params.id;
        await User.findByIdAndUpdate({_id}, req.body);
        res.status(200).send("User updated successfully")
    } catch (err) {
        console.log("Error", err)
        res.status(422).send({error: "Error while updating user"})
    }
}

const getUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findOne({_id:req.params.id});
        res.status(200).send({success: true, message: (user ? user:"user not found") || {}})
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user details"})
    }
};
const getAll = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send({success: true, message: (user ? user:"user list is empty")})
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user details"})
    }
};

const createNewUser = async (req, res) => {
    try {
        console.log("Created Successfully");
        const user = await User.create(req.body);
        res.status(200).send({message: "User created successfully.", user})
    } catch (err) {
        console.log(err);
        res.status(422).send({success: false, message: err.message})
    }
};

const deleteUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findOneAndRemove({ _id });
        res.status(200).send({success: true, message: (user ? "User deleted successfully":"user not found") || {}})
    } catch (err) {
        console.log("Error", err);
        res.status(422).send({error: "Error in getting user details"})
    }
};


module.exports={
    getAll,
    updateUser,
    getUser,
    createNewUser,
    deleteUser
};