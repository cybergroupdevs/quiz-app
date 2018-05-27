var User = require("../app/models/user");

var bulk = [{
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}, {
  "name": "Vishal R",
  "email": "vishivish18@gmail.com"
}];

bulk.map(function (data) {
  User
    .create(data, function (err, doc) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Bulk Updated for Users");
      console.log(doc)
    });
});