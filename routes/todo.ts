import { Router } from 'express'

const router = Router();

interface todos {
    id: string,
    name: string
}

const todo: todos[] = []

router.get("/get-todo", (req, res) => {
    res.status(200).json({ todo: todo })
})

router.post('/post-todo', (req, res) => {
    todo.push({id:new Date().toISOString(),name : 'helo'})
    res.status(200).json({staus:"succesffly"})
})

export default router;