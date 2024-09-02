import express from "express";
const app = express();
app.get("/", async (_, res) => {
  const users = [{ name: "Salome" }];
  return res.status(200).json({ message: "Api Requessts!", users });
});
app.listen(3000);