import { updateuser } from "../../repositories/adminRepository.js";

export const editUser = async(id, userData, image) =>{
    try{
        return await updateuser(id,userData, image);
    }catch(err){
        console.log(err);
    }
}