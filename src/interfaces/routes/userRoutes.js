import {Router} from 'express';
import {userRegister, userLogin, fetchProfile, userUpdate} from '../controllers/userControllers.js';
import { decodeToken } from '../../middlewares/auth.js';
import { upload } from '../../middlewares/multer.js';
const userRoute = Router();


userRoute.get('/userProfile', decodeToken, fetchProfile);
userRoute.post('/userRegister', upload.single('image'), userRegister);
userRoute.post('/userLogin', userLogin);
userRoute.put('/updateUser/:id', upload.single('image'), userUpdate);

export default userRoute;