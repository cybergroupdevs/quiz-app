const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quiz-app", function () {
  console.log("mongodb connected");
})
mongoose.connection.on("open", function (ref) {
  console.log("Connected to Mongo server...");
});


module.exports = mongoose;