import express from "express";

const app = express();
const port = 8080;

//  企業一覧を取得する with latest schedule
app.get("/corporations", (req, res) => {
  res.json({
    name: "corp1",
    schedule: {
      name: "人事面談",
      event: "面談",
      note: "質問事項を前もって考える",
    },
  });
});

// 企業を追加する
app.post("/corporations", (req, res) => {
  // insert data into database
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
