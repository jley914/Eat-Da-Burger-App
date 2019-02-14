var express = require('express');

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/:id", function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect("/");
    });
});

router.put("/api/:id", function (req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function () {
        res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;