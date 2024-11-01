const User = require("./modules/findUserById"); // นำเข้าโมเดล User
// const createUser = require("./modules/createUser"); // นำเข้าโมเดล createUser

exports.getUserById = async (request, res) => {
  const userId_ = request.body.userId;

  try {
    const user = await User.findOne({ userId: userId_ });
    if (!user) {
      const data = {
        status: "fail",
        message: "User not found",
      };

      return res.json(data);
    }

    res.json({ status: "ok", user });
  } catch (error) {
    console.log(error);
    const data = { status: "fail", message: error };
    res.json(data);
  }
};

exports.createUser = async (req, res) => {
  const { userId, info, activity, target } = req.body;
  if (!userId || !info || !activity || !target) {
    return res
      .status(400)
      .json({ status: "fail", message: "Missing required fields" });
  }

  try {
    const user = new User({
      userId: userId,
      info: {
        age: info.age,
        gender: info.gender,
        weight: info.weight,
        height: info.height,
      },
      activity: activity,
      target: target,
     
    });
    const result = await user.save();
    console.log(result);
    if (result.code === 11000) {
      return res.json({ status: "fail", message: "User already exists" });
    }

    if (result) {
      return res.json({ status: "ok", message: "User created" });
    }
  } catch (error) {
    // console.log(error);
    if (error.name === "ValidationError") {
      const data = {
        status: "fail",
        message: error.message,
      };
      return res.json(data);
    }
    if (error.code === 11000) {
      return res.json({ status: "fail", message: "User already exists" });
    }

    const data = { status: "fail", message: error };
    return res.json(data);
  }
};
