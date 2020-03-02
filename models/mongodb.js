const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/', {useNewUrlParser: true,useUnifiedTopology: true}, (err) => {
if (!err) {
console.log('MongoDB connected')
}
else {
console.log('Failed Connection Code: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./course.model');
