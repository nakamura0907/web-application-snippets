import express from "express";
import { errorHandling } from "./middleware/errorHandling";
import { v1Router } from "./router";

const app = express();

// サーバー設定
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ルーティング
app.use((req, _, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  console.log(`Request Body: ${JSON.stringify(req.body)}`);
  next();
});

// ルーティング
app.route("/").get((_, res) => {
  res.status(200).send({ ok: "OK" });
});
app.use("/api/v1", v1Router);

// エラーハンドリング
errorHandling(app);

module.exports = app;
