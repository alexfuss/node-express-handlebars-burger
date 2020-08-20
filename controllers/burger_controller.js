// Create required const variables
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Setup all routes
router.get("/", function(req, res) {
    res.redirect("/index");
});

// Index view
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObj = { burgers: data };
        
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

// Create a connect for a new burger
router.post("/burger/create", function(req, res) {
    burger.insertBurger(req.body.burger_name, function() {
        res.redirect("/index");
    });
});


// EAT DA BURGER
router.post("/burger/eat/:id", function(req, res) {
    burger.updateBurger(req.params.id, function() {
        res.redirect("/index");
    });
});

// Export
module.exports = router;