const path = require("path");

module.exports = (app) => {

  app.get("/exercise", (req, res) => {
    console.log("In /exercise");
    res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));
  });
  
  // This was added as Heroku guide said that there should be atleast one "/" for route
  app.get ("/", (req, res) => {
      res.sendFile(path.join(__dirname, "..", "public", "index.html"));
      
  });

  app.get ("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "stats.html"));
    
});
  
  // If no matching route default to index.html
  app.get ("*", (req, res) => {
      res.sendFile(path.join(__dirname, "..", "public", "index.html"));
      
  });
}