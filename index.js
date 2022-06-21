import express from "express";
import mongoose from "mongoose";
import { app } from "./app/app.js";

const URL = "mongodb://localhost:27017/newDb";

mongoose.connect(URL, (error, mongoDBInstance) => {
  if (error) {
    throw new Error("mongoDB connec error ", error);
  }
  if (!process.env.NODE_END || process.env.NODE.ENV === "DEVELOPMENT") {
    const { host, port, name } = mongoDBInstance;
    console.log(host, port, name);
  }
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log("server run " + PORT);
});
