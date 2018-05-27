var Category = require('../app/models/category')

var bulk = [{
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}, {
  "categoryName": "Algorithm",
  "isTechnology": true
}, {
  "categoryName": "Data Structure",
  "isTechnology": true
}, {
  "categoryName": "Quizes",
  "isTechnology": false
}]


bulk.map(function (data) {
  Category.create(data, function (err, doc) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Bulk Updated for Category");
    console.log(doc)
  });
})