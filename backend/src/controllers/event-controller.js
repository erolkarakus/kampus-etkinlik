import mongoose from "mongoose";
import Event from "../models/event-model.js";

// GET /events (?category=Atolye istege bagli)
export async function getEvents(req, res) {
  try {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const list = await Event.find(filter).sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
}

// GET /events/:id
export async function getEventById(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: { message: "Invalid event ID" } });
    }
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ error: { message: "Event not found" } });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
}

// POST /events
export async function createEvent(req, res) {
  try {
    const { title, category, capacity, date, time, location, description } = req.body ?? {};
    const newEvent = await Event.create({
      title,
      category,
      capacity: capacity !== undefined ? Number(capacity) : 0,
      date,
      time: time ?? "",
      location: location ?? "",
      description: description ?? "",
    });
    res.status(201).json(newEvent);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: { message: err.message } });
    }
    res.status(500).json({ error: { message: err.message } });
  }
}

// PUT /events/:id
export async function updateEvent(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: { message: "Invalid event ID" } });
    }
    const updated = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ error: { message: "Event not found" } });
    }
    res.json(updated);
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: { message: err.message } });
    }
    res.status(500).json({ error: { message: err.message } });
  }
}

// DELETE /events/:id
export async function deleteEvent(req, res) {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: { message: "Invalid event ID" } });
    }
    const deleted = await Event.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: { message: "Event not found" } });
    }
    res.json({ message: "Event deleted", id });
  } catch (err) {
    res.status(500).json({ error: { message: err.message } });
  }
}
