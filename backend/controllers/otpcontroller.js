const Otp = require("../models/otpmodel");
const User = require("../models/usermodel");
const { sendemail } = require("../utils/email");
async function sendotp(req, res, next) {
  const { email, password } = req.body;
  let num = "0123456789";
  let otp = "";
  for (let i = 0; i < 4; i++) {
    otp = otp + num[Math.floor(Math.random() * 10)];
  }

  console.log("otp", otp);
  try {
    if (!email) {
      return res.json({
        status: "fail",
        message: "please provide valid mail",
      });
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "no user found with given mail",
      });
    }
    console.log(req.body.email);
    // if (!user) {
    //   return res.send({
    //     message: "no user with given mail",
    //   });
    // }
    const otpdoc = await Otp.findOneAndUpdate(
      //   id: user.id,
      { email: req.body.email },
      {
        otp,
        createdat: Date.now(),
        email: req.body.email,
      },
      {
        upsert: true,
        new: true,
      }
    );
    // await otpdoc.save();
    console.log(otpdoc);
    await sendemail({
      //   id: user._id,
      email: req.body.email,
      subject: "otp for autntication",
      message: otp,
    });

    res.send({
      status:"success",
      message: "otp send succesfully",
      email: user.email,
    });
  } catch (e) {
    res.send({
      status:"fail",
      message: "error while sending otp",
      m: e.message,
    });
  }

  // next();
}
module.exports = { sendotp };