const mongoose = require("mongoose");
const URI = "mongodb+srv://archie:1234@cluster0.symhl.mongodb.net/estetica";

module.exports ={
   PORT:  process.env.PORT || 3000,
   DB: 'mongodb+srv://archie:1234@cluster0.symhl.mongodb.net/estetica'
}


mongoose.connect(URI)
	.then(db  => console.log("Base de datos conectada"))
	.catch(err => console.errror(err));

module.exports = mongoose;