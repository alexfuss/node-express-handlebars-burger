// Add dependencies
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// Setup server port
let PORT = process.env.PORT || 3000;

let app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

let exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let router = require("./controllers/burger_controller.js");
app.use("/", router);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
