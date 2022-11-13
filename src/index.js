import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db/config.js";
db();
const PORT = 8000;
const app = express();
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
