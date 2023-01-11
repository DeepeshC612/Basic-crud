const bodyparser = require("body-parser");
const express = require("express");
const app = express();
const port = 6000;
require("./model/config");
const user = require('./routers/userRouter')


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/", user)
app.listen(port, () => {
  console.log(`Server is running port no:${port}`);
});
