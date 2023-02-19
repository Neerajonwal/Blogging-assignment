const express = require("express");
const Movie = require("./Schema/model");
const app = express();
const port = process.env.PORT || 3000;
require("./db/connection");
const movies = require("./Schema/model")



app.use(express.json());

app.get("/",(req,res)=>{
    res.render('index')
})

app.post("/add-movie", async (req, res) => {
    const { title, director, releaseYear } = req.body;

    const Movies = new Movie({
        title, director, releaseYear
    })
    let data = await Movies.save()
    res.status(200).json(data)
    console.log(data)
})
app.get("/get-all", async (req, res) => {
    let Data = await movies.find();
    res.json(Data)
})

app.get("/get/:id", async (req, res) => {
    try {
        const id = req.params.id
        let onemovie = await movies.findById(id);
        console.log(onemovie)
        res.status(202).send(onemovie)

    } catch (err) {
        console.log(err)

    }
})


app.get("/get-paginated", async (req, res) => {

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page - 1) * limit;
    try {
        const moviesCount = await movies.countDocuments();
        const totalPages = Math.ceil(moviesCount / limit)

        let moviesPage = await movies.find().skip(skip).limit(limit);
        res.status(200).json({
            movies: moviesPage,
            currentPage: page,
            totalPages: totalPages,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});


app.listen(port, () => {
    console.log(`https://localhost:${port}`)
})