const express = require('express');
const bodyParser = require('body-parser');
const Route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const router = require('./routes/route.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://SonuKumarYadav9:Sk957079%40@cluster0.9bcnwnf.mongodb.net/book,Author-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', router);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
