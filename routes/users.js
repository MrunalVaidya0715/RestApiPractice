import express from "express";
import {v4 as uuidv4} from 'uuid'
import { deleteUser, getUser } from "./controllers/users";

const router = express.Router()

let users = []



router.post('/', (req,res)=>{
    const user = req.body
    users.push({...user, id: uuidv4()})
    console.log("Post Request Fired")
    res.send(`Data Added for ${user.firstName} Successfully`)
})


router.get('/:id',getUser)


router.delete('/:id',deleteUser)

router.patch('/:id', (req, res)=>{
    const { id} = req.params
    const {firstName, lastName,  age} = req.body

    const user = users.find((user)=> user.id === id)
    if (firstName) user.firstName = firstName
    if (lastName) user.lastName =lastName
    if (age) user.age = age
    
    res.send(`User with ${id} updated successfully`)
})

router.get('/',(req, res) => res.send(users))

export default router;