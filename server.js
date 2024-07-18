import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import DatabaseConnection from './database/db.js';
import PostRoute from './routes/route.js';
dotenv.config()
const app = express();
DatabaseConnection()
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = process.env.PORT || 4000

app.get('/', (req,res)=>{
    res.send('App is working')
})
app.use('/post',PostRoute)

app.listen(port ,()=>{
    console.log(`App is Listing on the port ${port}`);
})