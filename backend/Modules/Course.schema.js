import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    // categoryTitle: {
    //   type: String,
    //   required: true,
    // },
    // categoryDescription: {
    //   type: String,
    //   required: true,
    // },

    title: {
      type: String, // h2
      required: true,
    },
    description: {
      type: String, // p
      required: true,
    },

    price: {
      type: Number, // p1
      required: true,
    },

    viewText: {
      type: String,
      default: "View Details -->",
    },

    cartText: {
      type: String,
      default: "Add to Cart",
    },

    infoText: {
      type: String,
      default: "Add to cart to purchase and unlock course content",
    },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;



