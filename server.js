const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, DevOps World!");
});

const PORT = process.env.PORT || 3027;
app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));

