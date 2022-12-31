export const getUser =(req,res)=>{
    const {id} = req.params
    const foundedUser = users.find((user)=> user.id=== id)
    res.send(foundedUser)
}

export const deleteUser =  (req, res)=>{
    const {id} = req.params
    users = users.filter((user)=> user.id !== id)
    res.send(`User with ${id} deleted Successfully`)
}