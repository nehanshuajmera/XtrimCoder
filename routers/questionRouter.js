const router = require("express").Router();
const Question = require("../models/questionModel");

//Root route
router.get("/", (req, res) => {
    try {
        Question.find()
        .then((question) => res.json(question))
        .catch((err) => res.status(400).json("Error: " + err));

    } catch (err) {
      res.json(false);
    }
});

//Route to add a new post
router.route("/create").post((req, res) => {
    //Retrieve data for post
    const { title, body, solution } = req.body;
    const date = Date.parse(req.body.date);
    const comments = [];
    //Create a new Post and save it to DB
    const newQuestion = new Question({
        title,
        body,
        solution,
        date,
        comments,
    });

    // Save the new post
    newQuestion
        .save()
        .then(() => res.json("Question Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//route to display a particular post
router.route("/:id").get((req, res) => {
    Question.findById(req.params.id)
        .then((question) => res.json(question))
        .catch((err) => res.status(400).json("Error: " + err));
});

// // Route to edit a particular post
// router.route("/edit/:id").post((req, res) => {
//     Post.findById(req.params.id)
//         .then((post) => {
//             post.title = req.body.title;
//             post.body = req.body.body;
//             post.author = req.body.author;
//             post.date = Date.parse(req.body.date);
//             post.comments = req.body.comments;

//             post.save()
//                 .then(() => res.json("Post Edited"))
//                 .catch((err) => res.status(400).json("Error: " + err));
//         })
//         .catch((err) => res.status(400).json("Error: " + err));
// });

// // Route to Delete a route
// router.route("/:id").delete((req, res) => {
//     Post.findByIdAndDelete(req.params.id)
//         .then(() => res.json("Post Deleted"))
//         .catch((err) => res.status(400).json("Error: " + err));
// });

module.exports = router;