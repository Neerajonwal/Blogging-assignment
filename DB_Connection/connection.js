const config = require("../config/config")
const mongoose = require("mongoose");

mongoose.connect(config.Connection_Sting, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successfully")
}).catch((e) => {
    console.log(e)
});
