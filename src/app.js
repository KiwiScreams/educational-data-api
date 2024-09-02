import express from "express";
import { homeworks, grades, subjects, teachers } from "./data.js";
const app = express();
app.get("/homeworks", async (_, res) => {
  return res.status(200).json({ message: "Homeworks Api Requests!", homeworks });
});
app.get("/grades", async (_, res) => {
  return res.status(200).json({ message: "Grades Api Requests!", grades });
});
app.get("/subjects", async (_, res) => {
  return res.status(200).json({ message: "Subjects Api Requests!", subjects });
});
app.get("/teachers", async (_, res) => {
  return res.status(200).json({ message: "Teachers Api Requests!", teachers });
});
app.listen(3000);
