"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todo = [{ id: "12", name: "ABCD" }];
router.get("/get-todo", (req, res) => {
    res.status(200).json({ todo: todo });
});
router.post('/post-todo', (req, res) => {
    console.log(req.body);
    const newTodo = { id: new Date().toISOString(), name: req.body.todoname };
    todo.push(newTodo);
    res.status(200).json({ staus: "succesffly" });
});
router.post('/delete-todo', (req, res) => {
    const i = todo.findIndex((item) => item.id === req.body.id);
    console.log(i);
    if (i >= 0) {
        todo.splice(i, 1);
        res.status(200).json({ message: 'item successfully deleted' });
    }
    else {
        res.status(404).json({ message: 'item not found' });
    }
});
exports.default = router;
