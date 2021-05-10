const express = require('express');
const Joke = require('./server/models/JokeModel');

const app = express();

// importa funcion coneccion con mongoDB
require('./server/config/mongoose.config')();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/jokes', async (req, res) => { 
    try{
        const jokes =  await Joke.find();
        res.json({ jokes });
    } catch (err) {
        console.error(err);
        res.json({ message: "Something went wrong", error: err });
    }
});

app.put('/api/jokes/new', async (req, res) => { 
    try{
        const newJoke =  await Joke.create(req.body)
        res.json({ newJoke });
    } catch (err) {
        console.error(err);
        res.json({ message: "Something went wrong", error: err });
    }
});

app.delete('/api/jokes/delete/:id', async (req, res) => { 
    try{
        const joke =  await Joke.deleteOne({ _id: req.params.id })
        res.json({ joke });
    } catch (err) {
        console.error(err);
        res.json({ message: "Something went wrong", error: err });
    }
});

app.listen(8000, () => console.log(`Listening on PORT: ${8000}`));