const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("index", { message: "New messages here!" });
});

module.exports = newRouter;