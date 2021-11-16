const mongoose = require('mongoose');

const urlDataBase = 'mongodb+srv://admin:1234@cluster0.zo6wk.mongodb.net/crmdb?retryWrites=true&w=majority';

mongoose.connect(urlDataBase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));