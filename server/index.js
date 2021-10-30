import  express from 'express'
const app = express()
import cors from 'cors'
import  pool from "./db.js"
//middleware 
app.use(cors())
app.use(express.json())

//Routes //

//Create User
app.post("/users",async (req,res)=>{
    try {
        const { name, nickname, password }  = req.body
        const newUser = await pool.query(
            "INSERT INTO users (user_name, user_nickname,user_password) VALUES($1, $2, $3) RETURNING *", [name, nickname, password]
        )
       console.log(req.body)
            res.json(newUser.rows)
        
    } catch (err) {
        console.error(err.message)
    }
})
//Get All Users
app.get("/users", async (req,res)=>{
    try {
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows)
        
    } catch (err) {
        console.error(err.message)
        
    }
})


// Get Specific User
app.get("/users/:name", async (req,res)=>{
    try {
        const { name } = req.params
        const user = await pool.query("SELECT * FROM users WHERE user_name = $1 ", [name])
        res.json(user.rows[0])
       
    } catch (err) {
        console.error(err.message)
        
    }
})

//Update User


app.put("/users/:id", async(req,res)=>{
    try {
        const { id } = req.params
        const { password } = req.body
        const update = await pool.query("UPDATE users SET user_password = $1 where user_id = $2",[password, id])
        res.json("User was updated!")
    } catch (err) {
        console.error(err.message)
        
    }
})
//Delete User

app.delete("/users/:id", async(req,res)=>{
    try {
        const { id } = req.params
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1",[id])
        res.json("User was successfully deleted!")
    } catch (err) {
        console.error(err.message)
    }
})
app.listen(5000,()=>{
    console.log('Server has started on port 5000')
})