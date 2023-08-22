const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.getAllExpenses);
router.post('/', expenseController.createExpense);
router.post('/:id/delete', expenseController.deleteExpense);

module.exports = router;
