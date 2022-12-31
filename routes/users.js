import express from "express";
import {v4 as uuidv4} from 'uuid'


const router = express.Router()

let users = []



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


router.delete('/:id', (req, res)=>{
    const {id} = req.params
    users = users.filter((user)=> user.id !== id)
    res.send(`User with ${id} deleted Successfully`)
})

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