import { saveUser, checkUser } from "../../repositories/userRepository.js";
import { formatDate } from "../../services/moment.js";

export const registerUser = async (
  firstName,
  lastName,
  phoneNumber,
  email,
  password
) => {
  try {
    const date = await formatDate(Date.now());
    return await saveUser(
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      date
    );
  } catch (err) {
    console.log(err);
  }
};
