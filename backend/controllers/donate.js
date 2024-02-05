import asyncHandler from "express-async-handler";
import Donate from "../models/donate.js";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const sendDonationEmail = async (donerInfo) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fgraphicart786@gmail.com",
      pass: "raxx nzoi orrp txgj",
    },
  });

  const mailOptions = {
    from: "fgraphicart786@gmail.com",
    to: donerInfo.email,
    subject: "Donation Confirmation",
    text: `Thank you for your donation, ${donerInfo.fullName}! 
You donated ${donerInfo.amount} PKR to ${donerInfo.org}.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email sending failed:", error);
  }
};

export const newDonate = asyncHandler(async (req, res) => {
  const stripe = new Stripe(
    "sk_test_51Odyx7IchGlJTdF35Ni16hsLpaZBdK214s0S3RJveYpXGemaMkHhLkZfAzV9ilB4XihuEk8FO88bitYCC8lP83Pm00QdLVDsjz"
  );
  const { donerInfo, paymentMethod } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: donerInfo.amount * 100,
      currency: "PKR",
      confirm: true,
      payment_method: paymentMethod.id,
      description: `${donerInfo.fullName} donation ${donerInfo.amount} PKR.`,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Unable to process donation." });
    return;
  }

  const donate = new Donate({
    fullName: donerInfo.fullName,
    email: donerInfo.email,
    org: donerInfo.org,
    amount: donerInfo.amount,
    type: donerInfo.type,
    paymentMethod,
    isPaid: true,
    paidAt: new Date(),
  });
  const createdDonation = await donate.save();

  await sendDonationEmail(donerInfo);

  res.status(201).json({
    donerName: createdDonation.fullName,
    donateAmount: createdDonation.amount,
    donatetype: createdDonation.type,
  });
});

export const getAllDonates = asyncHandler(async (req, res) => {
  const donates = await Donate.find().sort({ createdAt: -1 });
  res.json({ donates });
});
