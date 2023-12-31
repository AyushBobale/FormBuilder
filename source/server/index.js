import "dotenv/config";

import { FormRouter, FormRouterNew } from "./src/routers/formRouter.js";

import connectDB from "./src/db/conn.js";
import cors from "cors";
import errorHandler from "./src/middlewares/errorHandlerMiddleware.js";
import express from "express";

const PORT = process.env.PORT || 5000;
connectDB();
//
const app = express();
app.use(
  cors({
    origin: [process.env.CORS_DOMAIN],
    credentials: true,
  })
);
// app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// server status check
app.get("/", (req, res, next) => {
  res.send({
    status: "OK",
  });
});

// Routers
app.use("/form", FormRouter);
app.use("/v1/form", FormRouterNew);
// error logging and handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
