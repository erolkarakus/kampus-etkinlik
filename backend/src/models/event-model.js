import mongoose from "mongoose";

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
      type: String,
      required: [true, "date is required"],
      trim: true,
    },
    time: {
      type: String,
      default: "",
      trim: true,
    },
    location: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_doc, ret) => {
        delete ret.__v;
        return ret;
      },
    },
  }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
