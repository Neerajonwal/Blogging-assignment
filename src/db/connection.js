const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://localhost/movies_db',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(()=>{
    console.log("connection is auccesful")
}).catch((e)=>{
    console.log(e)
})


