import express from'express';
const app = express();
app.use(express.json());

const data = [];

app.post("/save", (req, res) => {
  data.push(req.body);
  res.json({ message: "Data saved", data: req.body });
});

app.listen(3000, () => console.log("API running on port 3000"));
