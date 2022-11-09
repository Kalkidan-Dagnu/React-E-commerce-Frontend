require("dotenv").config();

exports.handler = async (event) => {
  const stripe = require("stripe")(
    "sk_test_51M1lewA7qXStjoe3MtPdYNoUakRRSwnJkWqh36msPvJBz7mBK7nwUPJE75gDnrwnir6SKWYAPJFU3DejnR0hPvXf00JObjBsru"
  );

  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};
