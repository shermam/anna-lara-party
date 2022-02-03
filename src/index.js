import express from "express";
import QRCode from "qrcode";
import { promisify } from "util";

const toDataURL = promisify(QRCode.toDataURL);

const app = express();

app.use(express.static("src/web"));

app.get("/:name", async (req, res) => {
  const { name } = req.params;
  const url = await toDataURL(`http://localhost/confirmation/${name}`);
  res.type("text/html");
  res.send(
    `<html><body><img src="${url}" height="500" width="500"/></body></html>`
  );
});

app.get("/confirmation/:name", async (req, res) => {
  const { name } = req.params;

  res.send(`Bem vinda a festa da Anna Lara ${name}!`);
});

app.listen(8888);
