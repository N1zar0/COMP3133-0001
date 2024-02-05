const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json());


mongoose.connect('mongodb+srv://atassinizar:4FlThkffaUW6T6xD@cluster0.t4dtzil.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(employeeRouter);

app.listen(8081, () => { console.log('Server is running...') });


