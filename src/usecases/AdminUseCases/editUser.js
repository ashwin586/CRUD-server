import { updateuser } from "../../repositories/adminRepository.js";

export const editUser = async(id, userData) =>{
    try{
        return await updateuser(id,userData);
    }catch(err){
        console.log(err);
    }
}