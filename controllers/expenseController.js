const Expense = require('../models/Expense');

module.exports = {
  async getAllExpenses(req, res) {
    try {
      const expenses = await Expense.findAll();
      res.render('index', { expenses });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  },

  async createExpense(req, res) {
    try {
      await Expense.create(req.body);
      res.redirect('/expenses');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  },

  async deleteExpense(req, res) {
    try {
      const expenseId = req.params.id;
      const expense = await Expense.findByPk(expenseId);
      if (expense) {
        await expense.destroy();
      }
      res.redirect('/expenses');
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  },
};
