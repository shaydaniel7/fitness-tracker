const express = require("express");
const mongoose = require("mongoose");

//set up port for express
const PORT = process.env.PORT || 8080;

//set up express
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//looks for public folder
app.use(express.static("public"));

//connect mongoose to mongodb
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });