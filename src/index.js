import express from "express";

const app = express();

app.use(express.static("src/web"));

app.listen(8888);
