const messages = require("../database/data");

const getMessage = (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.author,
        added: new Date()
    })

    res.redirect("/");
}

module.exports = getMessage;