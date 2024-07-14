const express=require("express");
const app=express();   
// this will take the express library and going to run it

const cors=require("cors")

// cors is used to connect multiple domains means ports like react 3000 and node 5000
const pool=require("./db")

//middleware
app.use(cors());
app.use(express.json());
// it will help to access the request body 

//Routes
// create todo
app.post("/todos",async(req,res)=>{
    try{
    // console.log(req.body)
    const {description}=req.body;
    const newTodo=await pool.query(`INSERT INTO todo(description) VALUES('${description}') RETURNING *`
    );
    res.json(newTodo.rows[0])
}
    catch (err){
    console.error(err.message);
    }
})
// get todo
app.get("/all-todos",async(req,res)=>{
    try{
        const all=await pool.query("SELECT * FROM todo");
        res.json(all.rows)
    }
    catch (err){
        console.error(err.message);
        }
})

// get a todo
app.get("/todos/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await pool.query(`SELECT * FROM todo WHERE todo_id=${id}`)
        res.json(todo.rows[0])
    }
    catch (err){
        console.error(err.message);
        }
})
// update a todo
app.put("/todos/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const {description}=req.body;
        const update=await pool.query("UPDATE todo SET description= $1 WHERE todo_id= $2",[description,id])

        res.json("todo is updated");
    } catch (err) {
        console.error(err.message)
    }
})

// delete a todo
app.delete("/todos/:id",async(req,res)=>{
    try {
       const {id}=req.params;
       const deleteTodo=await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]) 
       res.json("todo deleted")
    } catch (error) {
        
    }
})



app.listen(5000,()=>{
    console.log('server has started 5000');
});