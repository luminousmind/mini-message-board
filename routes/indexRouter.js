const { Router } = require("express");
const messages = require("../database/data")
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

module.exports = indexRouter;