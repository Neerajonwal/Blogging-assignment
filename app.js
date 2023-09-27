const express = require("express");
const config = require("./config/config")
const port = config.Port;
const app = express();
require("./DB_Connection/connection")

const authRoutes = require("./routes/auth")
const blogRoutes = require("./routes/blog")
const userRoutes = require("./routes/user")
app.use(express.json())

app.use('/auth', authRoutes);
app.use("/blog", blogRoutes);
app.use("/user", userRoutes)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})