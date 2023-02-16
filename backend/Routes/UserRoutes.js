const { GetUser,AddUser,UpdateUser,DeleteUser } = require("../Controllers/user");
const express = require("express");

const router = express.Router();
router.get("/",GetUser)
router.post("/", AddUser);
router.put("/", UpdateUser);
router.delete("/", DeleteUser);
module.exports = router;
