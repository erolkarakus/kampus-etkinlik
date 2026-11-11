import express from "express";
import cors from "cors";
import eventRoutes from "./routes/event-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Health-check endpoint'i (Adım 4)
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
    student: "2416501042",
  });
});

// Etkinlik rotaları (Adım 2)
app.use("/events", eventRoutes);

// Tanımlı olmayan rotalar için 404 yakalayıcı
app.use((req, res) => {
  res.status(404).json({ error: { message: "Route not found" } });
});

export default app;