const jwt = require("jsonwebtoken");
const AllUser=require('./../../Model/Schema')
const userLogin = {
  postUserLogin: async (req, resp) => {
    try {
      if (!req.body.email) {
        return resp.status(200).json({
          data: [],
          err: { msg: "please enter the email" },
        });
      } else if (!req.body.password) {
        return resp.status(200).json({
          data: [],
          err: { msg: "please enter the password" },
        });
      }
      let checkuser = await AllUser.findOne({ email: req.body.email });
      if (!checkuser) {
        return resp.status(200).json({
          data: [],
          err: { msg: "please enter the correct email id" },
        });
      }
      if (req.body.password!==checkuser.password) {
        return resp.status(200).json({
          data: [],
          err: { msg: "enter the correct password" },
        });
      }
      const token = await jwt.sign(
        { id: checkuser._id},
        "user"
      );
      return resp.status(200).json({
        data: [token],
        err: {},
      });
    } catch (e) {
      return resp.status(400).json({
        data: [],
        err: { msg: e.message },
      });
    }
  },
};
module.exports= userLogin