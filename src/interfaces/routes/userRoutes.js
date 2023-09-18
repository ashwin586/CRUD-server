import {Router} from 'express';
import {userRegister, userLogin, fetchProfile, userUpdate} from '../controllers/userControllers.js';
import { decodeToken } from '../../middlewares/auth.js';
const userRoute = Router();


userRoute.get('/userProfile', decodeToken, fetchProfile);
userRoute.post('/userRegister', userRegister);
userRoute.post('/userLogin', userLogin);
userRoute.put('/updateUser/:id', userUpdate);

export default userRoute;