import { Router } from "express";
import TodoController from "../controllers/todoController";

const router = Router();

router.get("/todos", TodoController.getTodos);
router.post("/todos", TodoController.createTodo);
router.put("/todos/:id", TodoController.updateTodo);
router.delete("/todos/:id", TodoController.deleteTodo);

export default router;
