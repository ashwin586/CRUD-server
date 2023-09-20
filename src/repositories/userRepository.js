import User from "../entities/userModel.js";

export const saveUser = async (firstName, lastName, phoneNo, email, password, image, date) => {
    const user = new User({ firstName, lastName, phoneNo: phoneNo, email, password,image, date});
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