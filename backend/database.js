const mongoose = require("mongoose");
const URI = "";

module.exports ={
   PORT:  process.env.PORT || 3000,
   DB: ''
}


mongoose.connect(URI)
	.then(db  => console.log("Base de datos conectada"))
	.catch(err => console.errror(err));

module.exports = mongoose;
