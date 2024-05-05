import User from "../models/User.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const email = await User.findOne({ email: req.body.email });
    if (email) {
      return next(createError(409, "A user with this email already exists"));
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(200).json("User Created Successfully");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError(404, "User with this email doesnot exist"));
    }
    const isPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isPassword) {
      return next(
        createError(404, "Sorry, the password you entered doesnot match")
      );
    }
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};
