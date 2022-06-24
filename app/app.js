import express, { urlencoded } from "express";
import { userRouter } from "./routes/user.router.js";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/users", userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export { app };
