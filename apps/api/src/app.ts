import express from "express";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";

const app: express.Express  = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "API is running"
  });
});

app.use("/api/users", userRoutes);

export default app;