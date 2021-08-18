const JWT = require('jsonwebtoken');


const mongoose = require('mongoose');


mongoose.set('useCreateIndex', true);
const userSchema = new mongoose.Schema ({
    name: {
    type: String,
    required: true,
    trim: true    
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true  
        },
    password: {
            type: String,
            required: true,
            trim: true    
            },
    tipo: {
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    }

},{
    timestamps: true
})
userSchema.methods.generadorjwt = function (){
    return JWT.sign({
        name: this.name,
        email: this.email,
        tipo: this.tipo
    },'C0ntr4s3ni4');
}

module.exports = mongoose.model('User', userSchema);