const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/interviewTest', {useNewUrlParser: true}, (err) => {
	
	if(err)	throw err;
	
});

module.exports = mongoose;