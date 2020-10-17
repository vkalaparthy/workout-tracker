const db = require("../models");

module.exports = (app) => {

  app.get("/api/workouts", (req, res) => {
    console.log(" ********* In get api/workouts");
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    console.log("do nothing for now in post");
    console.log(req.body);
    res.send("success");
  });
}