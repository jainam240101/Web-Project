const stripe = require("stripe")(
  "sk_test_51MButaKxBMJbdAZAfl4yHd3AMrCyEkJO6XUrOPG8pch8KAQhxxcOoIV4L9E1wYhd1wYdJvNSlxhA7vfdqPiYXHWY00Z45KPWKj"
);

async function postCharge(req, res) {
  try {
    const { amount, source, receipt_email } = req.body;

    const charge = await stripe.charges.create({
      amount,
      currency: "usd",
      source,
      receipt_email,
    });

    if (!charge) throw new Error("charge unsuccessful");

    res.status(200).json({
      charge,
      message: "charge posted successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = postCharge;
