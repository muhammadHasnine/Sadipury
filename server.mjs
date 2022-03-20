import express from 'express'
import connectDB from './connection/connection.mjs';
import routes from './routes/routes.mjs'
import cors from 'cors'

const app = express();

// app.use(cors());
app.use(express.json());
app.use('/api',routes)

connectDB();

const PORT = process.env.PORT || 2022 
app.listen(PORT,()=>{console.log(`Our server running on ${PORT}`)});