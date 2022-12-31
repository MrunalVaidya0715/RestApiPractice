import express from "express";
import {v4 as uuidv4} from 'uuid'

const router = express.Router()

const users = []



router.post('/', (req,res)=>{
    const user = req.body
    users.push({...user, id: uuidv4()})
    console.log("Post Request Fired")
    res.send(`Data Added for ${user.firstName} Successfully`)
})


router.get('/:id',(req,res)=>{
    const {id} = req.params
    const foundedUser = users.find((user)=> user.id=== id)
    res.send(foundedUser)
})

router.get('/',(req, res) => res.send(users))

export default router;