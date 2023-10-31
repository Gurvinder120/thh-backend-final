const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Guru:kr$signOP6990@cluster0.3df2kqx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

const demoSchema = new mongoose.Schema({
  useremail: String,
  userfeedback: String,
});

const User = mongoose.model("User", demoSchema);

module.exports = User;
