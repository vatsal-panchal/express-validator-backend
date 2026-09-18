import userModel from "../models/user.model.js";

export const registerController = async (req, res) => {
  const { email, phone, password } = req.body;

  const errors = [];

  if (!email) {
    errors.push({
      field: "email",
      message: "email is required",
    });
  }

  if (!phone) {
    errors.push({
      field: "phone",
      message: "phone is required",
    });
  }

  if (!password) {
    errors.push({
      field: "password",
      message: "password is required",
    });
  }
};
