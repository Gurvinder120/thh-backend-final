const express = require("express");
const cors = require("cors");
const User = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

PORT = 3000;

app.post("/demo", async (req, res) => {
  let user = new User();
  user.useremail = req.body.useremail;
  user.userfeedback = req.body.userfeedback;

  const doc = await user.save();

  res.json(doc);
  console.log(doc);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
