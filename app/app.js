import express, { urlencoded } from "express";
import { userRouter } from "./routes/user.router.js";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/users", userRouter);

export { app };
