const express = require("express");
const router = express.Router();


const MessageController = require("../controllers/MessageController");
const checkAuth = require("../middlewares/check-auth");




router.post("/", checkAuth, MessageController.addMessage);

router.get("/", checkAuth,  MessageController.getAllMessages);

router.put("/:messageId", checkAuth, MessageController.updateMessage);

module.exports = router;