const { Router } = require("express");
const newRouter = Router();
const getMessage = require("../controllers/getMessage");

newRouter.get("/", (req, res) => {
    res.render("form");
});

newRouter.post("/", getMessage);

module.exports = newRouter;