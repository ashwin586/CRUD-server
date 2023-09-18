import mongoose, { mongo } from 'mongoose';

const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/crud-react-node');
        console.log('Database Connected');
    }catch(err){
        console.log(err);
    }
}

export default connectDB;
