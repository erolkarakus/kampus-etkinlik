import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import Event from "./models/event-model.js";
import { events } from "./data/events.js";

async function seed() {
  try {
    await connectDB();
    await Event.deleteMany({});
    const cleanEvents = events.map(({ id, ...rest }) => rest);
    await Event.insertMany(cleanEvents);
    const count = await Event.countDocuments();
    console.log(`Seed tamamlandi. Toplam kayit: ${count}`);
  } catch (err) {
    console.error("Seed hatasi:", err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
