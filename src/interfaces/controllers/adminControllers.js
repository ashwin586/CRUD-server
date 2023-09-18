import {checkLogin} from '../../usecases/AdminUseCases/checkAdmin.js'
import { getUsers, getuser } from '../../usecases/AdminUseCases/getUsers.js';
import { deleteUser } from '../../usecases/AdminUseCases/deleteUser.js';
import { editUser } from '../../usecases/AdminUseCases/editUser.js';

export const adminLogin =  (req, res) => {
    try{
        const {email, password} = req.body;
        const adminData = checkLogin(email, password);
        return res.json(adminData);
    }catch(err){
        console.log(err)
    }
}

export const loadUsers = async(req, res) =>{
    try{
        const userData = await getUsers();
        return res.json(userData)
    }catch(err){
        console.log(err);
    }
}

export const deleteuser = async (req,res) =>{
    try{
        const userId = req.params.id;
        const response = await deleteUser(userId);
        res.json(response)
    }catch(err){
        console.log(err);
        res.json({message:"Couldnt delete the user"})
    }
}

export const getUser = async(req, res) =>{
    try{
        const userId = req.params.id;
        const response = await getuser(userId);
        res.json(response);
    }catch(err){
        console.log(err)
    }
}

export const updateUser = async (req, res) =>{
    try{
        const userId = req.params.id;
        const response = await editUser(userId, req.body);
        return res.status(200).json(response);
    }catch(err){
        console.log(err);
    }
}
