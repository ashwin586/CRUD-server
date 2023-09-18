import {Router} from 'express';
import { adminLogin, deleteuser, getUser, loadUsers, updateUser } from '../controllers/adminControllers.js';


const adminRoute = Router();

adminRoute.post('/adminLogin', adminLogin);
adminRoute.get('/loadDashboard', loadUsers);
adminRoute.delete('/adminDeleteUser/:id', deleteuser);
adminRoute.get('/getUser/:id', getUser);
adminRoute.put('/updateUser/:id', updateUser);

export default adminRoute;