const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("index", { message: "Hello, world!" });
});

module.exports = indexRouter;