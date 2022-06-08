const express = require('express');
const router = express.Router();
// const bookModel= require("../models/bookModel.js")
// const authorModel= require("../models/authorModel.js")

// const userkController= require("../controllers/userController")
const bookController= require("../controllers/bookController")




router.post("/createBook", bookController.createBook  )

router.post("/createAuthor", bookController.createAuthor )

router.post("/bookById", bookController.bookById )

// router.post("/authorOfTwoSate", bookController.authorOfTwoSate ) 

router.post("/costBetween50to100", bookController.costBetween50to100 ) 


module.exports = router;







// router.get("/getUsersData", UserController.getUsersData)

// router.post("/newBook", BookController.newBook  )      //1

// // router.post("/Author", BookController.author  )       //2

// // router.get("/bookList", BookController.bookList)

// // router.get("/getBookInYear", BookController.getBookInYear)

// // router.post("/getParticularBooks", BookController.getParticularBooks)

// // router.post("/getXINRBooks", BookController.getXINRBooks)

// // router.post("/getRandomBooks", BookController.getRandomBooks)

// // router.get("/getBooksById", BookController.getBooksById)







