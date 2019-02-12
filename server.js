// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoutes = require("./app/routing/htmlRoutes")
app.use("/", htmlRoutes);

var apiRoutes = require("./app/routing/apiRoutes")(app, path)
//app.use("/api/friends", apiRoutes);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
