import { registerUser } from "../../usecases/UserUseCases/registerUser.js";
import {loginUser} from '../../usecases/UserUseCases/loginUser.js';
import { findOneUser } from "../../repositories/userRepository.js";
import { editUser } from "../../usecases/AdminUseCases/editUser.js";

export const userRegister = async (req, res) => {
  try {
    const { firstName, lastName, phoneNo, email, password } = req.body;
    const image = req.file.path;
    await registerUser(firstName, lastName, phoneNo, email, password, image);
    return res.status(200).end();
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await loginUser(email,password);
    if(response){
      return res.status(200).json(response);
    } else {
      return res.status(401).end();
    }
    
  } catch (err) {
    console.log(err);
  }
};

export const fetchProfile = async (req, res) => {
  try{
    const userId = req.token.userId
    const response = await findOneUser(userId);
    return res.status(200).json(response);
  }catch(err){
    console.log(err);
  }
}

export const userUpdate = async (req, res) => {
  try{
    const userId = req.params.id;
    const image = req.file.path;
    const response = await editUser(userId, req.body, image);
    return res.status(200).json(response);
  }catch(err){
    console.log(err);
  }
}

export const getUser = async (req, res) =>{
  try{
    const userId = req.params.id;
    console.log(userId);
  }catch(err){
    console.log(err);
  }
}