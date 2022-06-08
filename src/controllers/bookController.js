// const { count } = require("console")

const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")


// 1  

const createBook= async function (req, res) {
    let data= req.body
  
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//2

const createAuthor= async function (req, res) {
    let data= req.body
    console.log(data)
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

let  bookById= async function(req,res){
    // let bookId=req.param;
    let data = await authorModel.find( {author_name:"Chetan Bhagat"}).select("author_id")
     let  bookdata = await BookModel.find({datauthor_id:[0].author_id})
    res.send({msg:data,bookdata})
}
// const authorOfTwoSate =async function(req,res){
    
//     let data =await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
//     let savedData= await authorModel.find({author_id:data.author_id}).select("author_name") 
//     let price = data.price
//     res.send({msg: savedData,price})

// }
const costBetween50to100= async function (req,res){
    let data = await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
    let saveData= authorModel.find({name:"Two states"})
    res.send({msg: data,})
}


module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.bookById= bookById
// module.exports.authorOfTwoSate= authorOfTwoSate
module.exports.costBetween50to100=costBetween50to100



// const bookList= async function (req, res) {

//     // let allBooks= await BookModel.find( ).count() // COUNT
// //    2
// }



