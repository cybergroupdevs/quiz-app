var Questions = require("./../app/models/question");

var questions = [{
    description: "What Java is famous for?",
    options: [{
      answer: "It's Architecture neutral and suitable for web-apps development",
      isCorrect: true,
      isImage: false
    }],
    difficulty: "easy",
    image: "http://diylogodesigns.com/blog/wp-content/uploads/2017/07/java-logo-vector.png",
    category: "General",
    technology: "Web Technology",
    isAsked: false,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString()
  },
  {
    description: "What C# is famous for?",
    options: [{
      answer: "It's Architecture neutral and suitable for web-apps development",
      isCorrect: true,
      isImage: false
    }],
    difficulty: "easy",
    image: "http://diylogodesigns.com/blog/wp-content/uploads/2017/07/java-logo-vector.png",
    category: "General",
    technology: "Web Technology",
    isAsked: false,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString()
  },
  {
    description: "What JavaScript is famous for?",
    options: [{
      answer: "It's flexible and, used as client-side scripting.",
      isCorrect: true,
      isImage: false
    }],
    difficulty: "easy",
    image: "http://diylogodesigns.com/blog/wp-content/uploads/2017/07/java-logo-vector.png",
    category: "General",
    technology: "Web Technology",
    isAsked: false,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString()
  }
]

for (let i = 0; i < 15; i++) {
  questions.map(function (data) {
    Questions
      .create(data, function (err, doc) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Bulk Updated for Questions");
        console.log(doc)
      });
  });
}