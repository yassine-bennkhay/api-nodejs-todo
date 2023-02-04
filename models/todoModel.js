const mongoose = require("mongoose");
const toDoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: [true, "please add todo"],
    },
    
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Task", toDoSchema);
