import { getAllUsers, getOneUser } from "../../repositories/adminRepository.js"

export const getUsers = async () =>{
    const userData = await getAllUsers()
    return userData;
}

export const getuser = async (id) =>{
    const userData = await getOneUser(id)
    return userData;
}