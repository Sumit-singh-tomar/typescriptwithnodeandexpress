"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todo = [];
router.get("/get-todo", (req, res) => {
    res.status(200).json({ todo: todo });
});
router.post('/post-todo', (req, res) => {
    const body = req.body;
    const newTodo = { id: new Date().toISOString(), name: body.todoname };
    todo.push(newTodo);
    res.status(200).json({ staus: "succesffly" });
});
router.post('/delete-todo', (req, res) => {
    const body = req.body;
    const i = todo.findIndex((item) => item.id === body.id);
    if (i >= 0) {
        todo.splice(i, 1);
        res.status(200).json({ message: 'item successfully deleted' });
    }
    else {
        res.status(404).json({ message: 'item not found' });
    }
});
router.post('/update-todo', (req, res) => {
    const body = req.body;
    const i = todo.findIndex((item) => item.id === body.id);
    if (i >= 0) {
        console.log(body.id, body.todoname);
        console.log(todo[i]);
        todo[i] = { id: body.id, name: body.todoname };
        console.log(todo);
        res.status(200).json({ message: 'item successfully updated' });
    }
    else {
        res.status(404).json({ message: 'item not found' });
    }
});
exports.default = router;
