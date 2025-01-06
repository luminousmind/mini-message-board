const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => {
    res.render("form");
});

newRouter.post("/", (req, res) => {
    res.send(`The author's name is: ${req.body.author} and 
        your message is: ${req.body.message}`)
});

module.exports = newRouter;