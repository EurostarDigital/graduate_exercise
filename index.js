const express = require("express");
const data = require("./data.json");

const app = express();

app.get("/api/todos", function (_req, res) {
  res.status(200).send(data);
})
app.use(express.static('public'));

app.listen(3000, function () {
  console.log(`🚄 Server running @ http://localhost:3000`)
});
