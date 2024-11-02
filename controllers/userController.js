const User = require("./modules/userSchema"); // นำเข้าโมเดล User
// const createUser = require("./modules/createUser"); // นำเข้าโมเดล createUser

exports.getUserById = async (request, res) => {
  const userId_ = request.query.userId;

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
    const data = { status: "fail", message: error };
    res.json(data);
  }
};

exports.createUser = async (req, res) => {
  const { userId, info, activity, target, userPictureUrl, userName  } = req.body;
  if (!userId || !info ) {
    return res
      .status(400)
      .json({ status: "fail", message: "Missing required fields" });
  }

  try {
    const user = new User({
      userId: userId,
      info: {
        name: info.name,
        age: info.age,
        gender: info.gender,
        weight: info.weight,
        height: info.height,
        bmi : info.bmi
      },
      activity: activity,
      target: target,
      userPictureUrl : userPictureUrl,
      userName : userName
     
    });
    const result = await user.save();
    if (result.code === 11000) {
      return res.json({ status: "fail", message: "User already exists" });
    }

    if (result) {
      return res.json({ status: "ok", message: "User created", userId : userId });
    }
  } catch (error) {
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
