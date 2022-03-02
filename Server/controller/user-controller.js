import user from "../model/User.js";

export const addUser = async (req, res) => {
  try {
    let exists = await user.findOne({ googleId: req.body.googleId });

    if (exists) {
      res.status(200).json("user already exists");
      return;
    }

    const newUser = new user(req.body);
    await newUser.save();
    res.status(200).json("user saved successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
