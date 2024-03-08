import { Router } from 'express'

const router = Router();

interface todos {
    id: string,
    name: string
}

const todo: todos[] = [{ id: "12", name: "ABCD" }]

router.get("/get-todo", (req, res) => {
    res.status(200).json({ todo: todo })
})

router.post('/post-todo', (req, res) => {
    console.log(req.body)
    const newTodo: todos = { id: new Date().toISOString(), name: req.body.todoname }
    todo.push(newTodo)
    res.status(200).json({ staus: "succesffly" })
})

router.post('/delete-todo', (req, res) => {
    const i = todo.findIndex((item) => item.id === req.body.id)
    if (i >= 0) {
        todo.splice(i, 1)
        res.status(200).json({ message: 'item successfully deleted' })
    }
    else{
        res.status(404).json({message:'item not found'})
    }
})

router.post('/update-todo',(req,res)=>{
    const i = todo.findIndex((item) => item.id === req.body.id)
    if (i >= 0) {
        todo[i] = {id:req.body.id,name:req.body.tododname}
        res.status(200).json({ message: 'item successfully updated' })
    }
    else{
        res.status(404).json({message:'item not found'})
    }
})

export default router;