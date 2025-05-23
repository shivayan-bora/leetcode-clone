import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
