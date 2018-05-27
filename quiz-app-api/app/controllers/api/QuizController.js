 /*jshint esversion: 6 */
 const ResourceController = require("../ResourceController");
 const {
   Quiz
 } = require('../../models');

 class QuizController extends ResourceController {
   constructor(...args) {
     super(...args);
   }
   test(req, res) {
     res.send('update called from class');
   }
 }
 var qc = new QuizController(Quiz);
 // quiz = {
 //     create: (req, res) => {
 //         try {
 //             if (req.body.quizName == "") {
 //                 throw "Quiz Name is blank";
 //             }
 //         } catch (ex) {
 //             res.status(400).json(ex);
 //         }
 //         var quizObj = {
 //             quizName: req.body.quizName,
 //             year: req.body.year
 //         };
 //         qc.create(quizObj).then((result) => {
 //             res.status(200).json(result);
 //         });
 //     },
 //     list: (req, res) => {
 //         qc.index().then((result) => {
 //             result.sort(function(a, b) { return a.quizName.localeCompare(b.quizName); });
 //             res.status(200).json(result.sort());
 //         });
 //     },
 //     show: (req, res) => {
 //         try {
 //             if (req.params._id == "") {
 //                 throw "Quiz Id is blank";
 //             }
 //         } catch (ex) {
 //             res.status(400).json(ex);
 //         }
 //         qc.show(req.params._id).then((result) => {
 //             res.status(200).json(result);
 //         });
 //     },
 //     update: (req, res) => {
 //         var quizObj = {
 //             quizName: req.body.quizName,
 //             year: req.body.year
 //         };
 //         qc.update(quizObj, req.params._id).then((result) => {
 //             res.status(200).json(result);
 //         });
 //     },
 //     delete: (req, res) => {
 //         try {
 //             if (req.params._id == "") {
 //                 throw "Quiz Id is blank";
 //             }
 //         } catch (ex) {
 //             res.status(400).json(ex);
 //         }
 //         qc.delete(req.params._id).then((result) => {
 //             res.status(200).json(result);
 //         });
 //     }


 // };


 // module.exports = qc
 module.exports = qc;