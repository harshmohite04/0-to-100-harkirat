const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic

  const username = req.body.username;
  const password = req.body.password;

  User.findOne({
    username: username,
  }).then((value) => {
    if (value) {
      res.json({
        msg: "User already existed",
      });
    } else {
      User.create({
        username: username,
        password: password,
      }).then(() => {
        res.json({
          msg: "User create Successfully",
        });
      });
    }
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const username = req.headers.username;
  const password = req.headers.password;

  const allCourse = await Course.find({});
  res.json({
    courses: allCourse,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  ).then(() => {
    res.json({
      msg: "User Purchased Course",
    });
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const user = await User.findOne({
    username: req.headers.username,
  });
  const course = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    course: course,
  });
});

module.exports = router;
