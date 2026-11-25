import mongoose from "mongoose";
import { formatDate, parseDate } from "../utils/date.js";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "category is required"],
      trim: true,
    },
    capacity: {
      type: Number,
      default: 0,
      min: [0, "capacity cannot be negative"],
    },
    date: {
      type: Date,
      required: [true, "date is required"],
      set: parseDate,
      get: formatDate,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true, id: false },
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;