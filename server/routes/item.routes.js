const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get('/todos', itemController.getAllTodos);
router.post('/todo/new',itemController.createTodo);
router.delete('/todo/delete/:id',itemController.deleteTodo);
router.put('/todo/update/:id',itemController.updateTodo);
router.get('/todo/complete/:id',itemController.getCompletedTodo);


module.exports = router;
