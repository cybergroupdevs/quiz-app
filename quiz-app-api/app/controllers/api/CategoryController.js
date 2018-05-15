 /*jshint esversion: 6 */
 const ResourceController = require("../ResourceController");
 const { Category } = require('../../models');

 class CategoryController extends ResourceController {
     constructor(...args) {
         super(...args);
     }
     // createCategory(req, res) {
     //    let dataObj = {};
     //    Object.keys(req.body).forEach(function(key){dataObj[key]=req.body[key];});
     //    console.log("This is data"+JSON.stringify(dataObj));
     //     try {
     //         if (req.body.categoryName == "") {
     //             throw "Category Name is blank";
     //         }
     //     } catch (ex) {
     //         res.status(400).json(ex);
     //     }
     //     let categoryObj = {
     //         categoryName: req.body.categoryName,
     //         isTechnology: req.body.isTechnology
     //     };        
     //     category.create(categoryObj).then(function(result){
     //        res.send(result);
     //     });
     // }

 }
 let category = new CategoryController(Category);
 // category = {

 //     list: (req, res) => {
 //         cc.index().then((result) => {
 //             result.sort(function(a, b) { return a.categoryName.localeCompare(b.categoryName); });
 //             res.status(200).json(result);

 //         });
 //     },
 //     show: (req, res) => {
 //         //Error handling not needed in this case but still adding.
 //         try {
 //             if (req.params._id == "") {
 //                 throw "Category Id is blank";
 //             }
 //         } catch (ex) {
 //             res.status(400).json(ex);
 //         }
 //         cc.show(req.params._id).then((result) => {
 //             res.status(200).json(result);
 //         });


 //     },

 //     update: (req, res) => {

 //         let categoryObj = {
 //             categoryName: req.body.categoryName,
 //             isTechnology: req.body.isTechnology
 //         };
 //         cc.update(categoryObj, req.params._id).then((result) => {
 //             res.status(200).json(result);
 //         });
 //     },
 //     delete: (req, res) => {
 //         try {
 //             if (req.params._id == "") {
 //                 throw "Category Id is blank";
 //             }
 //         } catch (ex) {
 //             res.status(400).json(ex);
 //         }
 //         cc.delete(req.params._id).then((result) => {
 //             res.status(200).json(result);
 //         });
 //     }

 // };

 module.exports = category;