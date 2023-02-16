const mongoose = require("mongoose");
const UserSchema = require("./UserSchema");
const User = require("../Models/user");

exports.GetUser = async (req, res) => {
  try {
    const result = await User.find();

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({
      message: " some thing went wrong please try again later",
    });
  }
};

exports.AddUser = async (req, res) => {
  const { error, value } = UserSchema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const user = new User({
    name: value.name,

    address: value.address,
    phone: value.phone,
  });

  try {
    const result = await user.save();

    res.status(200).send({
      message: "User Added Successfully",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).send({
        message: "User Already Exists",
      });
      return;
    }

    res.status(400).send({
      message: "there is an error please try again later",
    });
  }
};

exports.UpdateUser = async (req, res) => {
  console.log(req.body);
  const id = req.body.id;

  const data = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
  };

  const { error, value } = UserSchema.validate(data);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  try {
    const result = await User.updateOne(
      { _id: id },
      {
        $set: {
          name: value.name,
          address: value.address,
          phone: value.phone,
        },
      }
    );
    console.log(result)

    res.status(200).send({
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(400).send({
      message: "there is an error please try again later",
    });
  }
};

exports.DeleteUser = async (req, res) => {
  
  if (req.body.id === "" || req.body.id===undefined) {
    res.status(400).send({
      message: "there no id to delete",
    });

    return;
  }

  try {

    const result = await User.deleteOne({
      _id: req.body.id,
    });

    console.log(result);
    res.status(200).send({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(400).send({
      message: "there is an error please try again later",
    });
  }
};
