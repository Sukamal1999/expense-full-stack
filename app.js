const express = require('express');
const bodyParser = require('body-parser');
const expenseroute = require('./routes/expenseroute');
const sequelize = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/expenses', expenseroute);

// Define a default route
app.get('/', (req, res) => {
  res.redirect('/expenses');
});

// Sync the database and start the server
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
