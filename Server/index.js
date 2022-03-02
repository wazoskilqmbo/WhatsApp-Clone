import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// components
import Connection from "./database/db.js";
import Routes from "./routes/Route.js";

dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

Connection(username, password);
app.listen(PORT, () => {
  console.log(`Server is runnning PORT ${PORT}`);
});
