const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World! 2"));
app.get("/toto", (req, res) =>
  res.send({
    pseudo: "toto",
  })
);

app.listen(port, "0.0.0.0", () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
