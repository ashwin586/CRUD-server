import { saveUser, checkUser } from "../../repositories/userRepository.js";
import { formatDate } from "../../services/moment.js";

export const registerUser = async (
  firstName,
  lastName,
  phoneNo,
  email,
  password,
  image
) => {
  try {
    const date = await formatDate(Date.now());
    return await saveUser(
      firstName,
      lastName,
      phoneNo,
      email,
      password,
      image,
      date
    );
  } catch (err) {
    console.log(err);
  }
};
