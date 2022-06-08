const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
     
        name:{
            type: String,
        },
        author_id:{
            type :String,
            require:true
        },
       
        price:Number,
        ratings:Number,
    

    
},
 { timestamps: true });
 

  //users
module.exports = mongoose.model('book', bookSchema) 




//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
