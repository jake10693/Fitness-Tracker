const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = 3001;
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb:jake10693:thissucks1D!.mlab.com:11082/heroku_9mp1g9d7", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// routes
app.use(require("./routes/API.js"));
app.use(require("./routes/view.js"));
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

