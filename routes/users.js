import express from "express";
const router = express.Router()

const users = [
    {
        firstName : "John",
        lastname : "Doe",
        age: 25
    },
    {
        firstName : "Jane",
        lastname : "Doe",
        age: 23
    }
]

router.post('/', (req,res)=>{
    const user = req.body
    users.push(user)
    console.log("Post Request Fired")
    res.send(`Data Added for ${user.firstName} Successfully`)
})


router.get('/',(req, res) => res.send(users))

export default router;