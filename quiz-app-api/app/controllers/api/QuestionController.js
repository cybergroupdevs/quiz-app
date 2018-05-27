/*
1    Aakash   10-04-2018
*/

const ResoureController = require("./../ResourceController");
const {
  Question
} = require("./../../models");

class QuestionController extends ResoureController {
  constructor(...args) {
    super(args[0]);
    this.listAllQuestions = args[1]; // store map of all questions from DB
    this.totalQuestions = 0; // obtain total number of questions in the list
    this.randoms = [];
    this.idx = 0;
  }
}

const ques = new QuestionController(Question, new Map());

const question = {
  "create": (req, res, next) => {
    ques
      .create(req.body)
      .then((result) => {
        res
          .status(200)
          .json({
            "status": "SUCCESS"
          });
      })
      .catch((e) => {
        res
          .status(404)
          .json({
            "status": "Not Found"
          });
      });
  },

  // Method to GET list of all questions
  "read": (req, res, next) => {
    var queryString = {
      "page": Number.parseInt(req.query.page),
      "limit": Number.parseInt(req.query.limit),
      "perPage": Number.parseInt(req.query.perPage)
    };
    ques
      .index(queryString)
      .then((result) => {
        if (result.response.length === 0) {
          res
            .status(200)
            .json({
              "status": "SUCCESS",
              "message": result.message
            });
        }
        res
          .status(200)
          .json({
            "status": "SUCCESS",
            "total": result.response.length,
            "page": result.page,
            "perPage": result.perPage,
            "limit": result.limit,
            "result": mapQuestions(result)
          });
        next();
      })
      .catch((e) => {
        res
          .status(404)
          .json({
            "status": "Not Found",
            "Text": e
          });
      });

    const mapQuestions = (result) => {
      // console.log(ques.listAllQuestions.keys());
      if (ques.listAllQuestions.has(queryString.page)) {
        // console.log("In If-Check block!");
        return ques.listAllQuestions.get(queryString.page);
      } else {
        // console.log("In Else-Check block!");
        ques.listAllQuestions.set(queryString.page, result.response);
        ques.listAllQuestions.get(queryString.page).forEach((ele) => {
          ele.isAsked = true;
        });
        return ques.listAllQuestions.get(queryString.page);
      }
    }
  },

  "update": (req, res, next) => {
    ques
      .update(req.body)
      .then((result) => {
        res
          .status(200)
          .json({
            "status": "SUCCESS",
            "result": result
          });
      })
      .catch((e) => {
        res
          .status(404)
          .json({
            "status": "Not Found",
            "Text": e
          });
      });
  },

  "delete": (req, res, next) => {
    console.log(req.body.id);
    ques
      .delete(req.body.id)
      .then((result) => {
        res
          .status(200)
          .json({
            "status": "SUCCESS"
          });
      })
      .catch((e) => {
        res
          .status(404)
          .json({
            "status": "Not Found",
            "Text": e
          });
      });
  },

  // Method to GET list of all generated/asked questions
  "generatedQuestions": (req, res, next) => {
    let listOfGeneratedQuestions = () => {
      var _result = [];
      if (_result.includes(req.query.page) === false) {
        for (const [key, value] of ques.listAllQuestions) {
          _result.push({
            key,
            value
          });
        }
        return _result;
      }
      return _result;
    }

    let result = listOfGeneratedQuestions();

    /* example
    for(let i = 0; i < result.length; i++) {
      result[i].value.forEach((ele) => {console.log(ele)})
      console.log(result[i].key);
    } */

    res
      .status(200)
      .json({
        "status": "SUCCESS",
        "total": result.length,
        "collection": result
      });
  },

  // Method to GET a random question
  "randomQuestion": (req, res, next) => {
    function generateRandomQuestion(req, res, next) {
      var random = generateRandomNumberRecursive(this.randoms, this.randoms.length);
      this.listAllQuestions[random].isAsked = true;
      res
        .status(200)
        .json({
          "status": "SUCCESS",
          "random_number": random,
          "random_question": this.listAllQuestions[random]
        });
      next();
    };

    function generateRandomNumberRecursive(random, length) {
      var num = Math.floor(Math.random() * this.totalQuestions);
      // if length is 0 then, return 0
      if (length === 0) { // <- terminating condition
        return 0;
      }
      if (random.includes(num) === true) {
        return generateRandomNumberRecursive(random, (length - 1));
      } else {
        random.push(num);
        return num;
      }
    }

    generateRandomQuestion(req, res, next);
  },

  // send (next) question
  "nextQuestion": (req, res, next) => {
    function foo(req, res, next) {
      if (this.idx < this.totalQuestions) {
        this.listAllQuestions[this.idx].isAsked = true;
        res
          .status(200)
          .json({
            "status": "SUCCESS",
            "question_number": this.idx,
            "question": this.listAllQuestions[this.idx]
          });
        this.idx++;
      }
      res
        .status(200)
        .json({
          "status": "SUCCESS",
          "question_number": (this.idx - 1),
          "question": this.listAllQuestions[this.idx - 1]
        });
    };

    foo(req, res, next);
  }
};

module.exports = question;