import express from 'express';
import connectDB from './config/mongo.js';
import cors from 'cors'
import userRoute from './interfaces/routes/userRoutes.js';
import adminRoute from './interfaces/routes/adminRoutes.js';

const PORT = 5000;
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


const allowedOrigins = ['http://localhost:3000']

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);

connectDB();

app.use('/', userRoute);
app.use('/admin', adminRoute);


app.listen(PORT, () => {
    console.log(`server started at PORT ${PORT}`)
});

