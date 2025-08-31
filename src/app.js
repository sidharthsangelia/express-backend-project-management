import express from "express";
import cors from "cors";
import { healthCheck } from "./controllers/healthcheck.controller.js";
const app = express();

// basic configs of express
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// CORS configs
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
);

// import routes

app.use("/api/v1/healthcheck", healthCheck);

app.get("/", (req, res) => {
  res.send("Welcome to basecampy🌋");
});

export default app;
