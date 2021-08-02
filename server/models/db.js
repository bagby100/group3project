const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/SheltersDB', {useNewUrlParser: true}, (err) => {
    if(!err) {console.log('MongoDB Connection Succeeded')}
    else{ console.log('Error in Db Connection: '+ err)}
});

require('./admin.model');
require('./pets.model');