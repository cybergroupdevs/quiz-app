// # API routes
var express = require("express"),
    api = require("../controllers"),
    apiRoutes;
var path = require("path")

apiRoutes = function (router) {
    router = express.Router();

    // ## User Auth
    // router.post("/users/signup", api.users.signup);
    // router.post("/users/session", api.users.session);
    // router.get("/users/signin", api.users.signin);
    // router.get("/users/signout", api.users.signout);

    // // ## Analytics
    // router.get("/analytics/users", api.analytics.totalCountOfUsers);

    // ## User
    router.post("/user/signup", api.user.signup);
    router.post("/user/session", api.user.session);
    router.get("/user/signin", api.user.signin);
    // router.get("/user/create", api.user.create);
    // router.get("/user/list", api.user.list);
    // router.get("/user/:_id", api.user.show);

    // Quiz controller
    router.post("/quiz", api.quiz.create);
    router.get("/quiz", api.quiz.list);
    router.get("/quiz/:_id", api.quiz.show);
    router.put("/quiz/:_id", api.quiz.update);
    router.delete("/quiz/:_id",api.quiz.delete);

    // Category controller
    router.post("/category", api.category.create);
    router.get("/category/:_id", api.category.show);
    router.put("/category/:_id", api.category.update);
    router.get("/category", api.category.list);
    router.delete("/category/:_id",api.category.delete)

    // Questions Controller
    router.get("/question", api.question.read);
    router.post("/question", api.question.create);
    router.put("/question", api.question.update);
    router.delete("/question", api.question.delete);
    // ==================
    router.get("/question/randomQuestion", api.question.randomQuestion);
    router.get("/question/generatedQuestions", api.question.generatedQuestions);
    router.get("/question/nextQuestion", api.question.nextQuestion);

    //Teams Controller
    router.post("/team" ,api.team.create);
    router.get("/team", api.team.list);
    router.delete("/team/:_id",api.team.delete);
    router.put("/team/:_id", api.team.update);
    router.get("/team/:_id", api.team.show);

    return router;
};

module.exports = apiRoutes;
