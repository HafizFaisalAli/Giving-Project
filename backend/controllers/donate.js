import asyncHandler from "express-async-handler";
import Donate from "../models/donate.js";
import Stripe from "stripe";

export const newDonate = asyncHandler(async (req, res) => {
  const stripe = new Stripe(
    "sk_test_51Odyx7IchGlJTdF35Ni16hsLpaZBdK214s0S3RJveYpXGemaMkHhLkZfAzV9ilB4XihuEk8FO88bitYCC8lP83Pm00QdLVDsjz"
  );
  const { donerInfo, paymentMethod } = req.body;

  const amountInCents = donerInfo.amount * 100000;

  console.log("Amount in cents:", amountInCents);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
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
    donerInfo,
    paymentMethod,
    isPaid: true,
    paidAt: new Date(),
  });
  const createdDonation = await donate.save();

  res.status(201).json({
    donationDetails: createdDonation,
  });
});
