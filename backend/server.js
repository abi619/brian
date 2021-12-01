import express from 'express'
import userRoute from './routes/userRoutes.js'
import cors from 'cors'

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

const app = express()
app.use(cors(corsOptions)) // Use this after the variable declaration

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use('/api/users', userRoute)

app.listen(5000, () => {
    console.log('server staretd at port 5000..')
})