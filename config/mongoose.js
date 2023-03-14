const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
// mongoose.connect('mongodb://localhost:27017/Placement-Cell');
mongoose.connect('mongodb+srv://ben:ben@cluster0.oq73w.mongodb.net/?retryWrites=true&w=majority');

mongoose.set('strictQuery', true);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
mongoose.set('strictQuery', true);
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
