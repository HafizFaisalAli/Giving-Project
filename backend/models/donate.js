import mongoose from "mongoose";

const donateSchema = new mongoose.Schema(
  {
    isPaid: {
      type: Boolean,
      defaut: false,
    },
    donerInfo: {
      type: {
        type: String,
        required: [true, "Type is Required."],
      },
      org: {
        type: String,
        required: [true, "Oranization is Required."],
      },
      amount: {
        type: Number,
        required: [true, "Amount is Required"],
      },
      fullName: {
        type: String,
        required: [true, "Full Name is Required"],
      },
      email: {
        type: String,
        required: [true, "Email is Required"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Donate = mongoose.model("Donate", donateSchema);

export default Donate;
