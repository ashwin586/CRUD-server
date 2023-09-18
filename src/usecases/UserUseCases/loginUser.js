import {checkUser} from '../../repositories/userRepository.js';
import { generateUserToken } from '../../middlewares/auth.js';

export const loginUser = async (email, password) =>{
    try{
        const existingUser = await checkUser(email);
        if(existingUser && existingUser.password === password){
            const token = generateUserToken(existingUser);
            return token;
        }
    }catch(err){
        console.log(err);
    }
}
