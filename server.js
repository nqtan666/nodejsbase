const express = require("express");
// import thu vien express
const app = express();
// tao 1 app để sử dụng express
const port = 3000;
// port cổng 

app.get("/", (req, res) => {
  res.send("Toi la Quoc Tan!");
});

app.get("/about", (req, res) => {
    res.send(`I'm Tan`);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// khi chạy post sẽ gọi callback phía sau 
