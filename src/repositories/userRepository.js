import User from "../entities/userModel.js";

export const saveUser = async (firstName, lastName, phoneNumber, email, password, date) => {
    const user = new User({ firstName, lastName, phoneNo: phoneNumber, email, password, date});
    return await user.save();
}

export const checkUser = async (email) => {
    const existingUserData = await User.findOne({email:email});
    return existingUserData;
}

export const findOneUser = async (id) => {
    try{
        return await User.findById(id);
    }catch(err){
        console.log(err)
    }
}