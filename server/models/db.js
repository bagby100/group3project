const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bagby100-admin:seventhecat7@cluster0.oqr16.mongodb.net/SheltersDB', {useNewUrlParser: true}, (err) => {
    if(!err) {console.log('MongoDB Connection Succeeded')}
    else{ console.log('Error in Db Connection: '+ err)}
});

require('./admin.model');
require('./pets.model');