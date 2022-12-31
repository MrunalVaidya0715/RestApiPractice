import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js'

const app = express();
const PORT = 5001;

app.use(bodyParser.json())
app.get('/', (req, res)=>{
    res.send("Hello")
    console.log("Done")
    
})

app.use('/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server Listening at http://localhost:${PORT}`)
})