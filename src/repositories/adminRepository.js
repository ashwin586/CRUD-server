import User from "../entities/userModel.js";

export const getAllUsers = async () => {
  return await User.find().lean();
};

export const deleteOneUser = async (id) => {
  const response = await User.findByIdAndDelete(id);
  if (response) {
    return response;
  } else {
    return { message: "User not found" };
  }
};

export const getOneUser = async (id) => {
  const response = await User.findById(id);
  if (response) {
    return response;
  } else {
    return { message: "User not found" };
  }
};

export const updateuser = async (id, userData, image) => {
  try {
    const { firstName, lastName, phoneNo, email, password } = userData;
    return await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        phoneNo,
        email,
        password,
        image,
      },
      { new: true }
    );
  } catch (err) {
    console.log(err);
  }
};
