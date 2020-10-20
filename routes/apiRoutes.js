const db = require("../models");

module.exports = (app) => {

  // find the workouts
  app.get("/api/workouts", (req, res) => {
    // console.log(" ********* In get api/workouts");
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Cretae a workout
  app.post("/api/workouts", (req, res) => {
    // console.log("** /api/workouts in post");
    // console.log(req.body);
    db.Workout.create(req.body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      })
  });

  // this function supports addExercise
  app.put("/api/workouts/:id", (req, res) => {
    // console.log("** In apiRoutes put");
    // console.log(req.body);
      db.Workout.findByIdAndUpdate(
      {
        _id: req.params.id
      },
      {
        $set: {
          // day: new Date(),
          exercises: req.body
        }
      },
  
      (error, edited) => {
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log(edited);
          res.send(edited);
        }
      }
    );
  });

  app.get("/api/workouts/range", (req, res) => {
    console.log("*** In range find");
    db.Workout.find({}).limit(7)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
  });

  app.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id, (err, docs) => {
      if (err){ 
          console.log(err) 
      } 
      else{ 
          console.log("Deleted : ", docs); 
      } 
    });
  });

}
