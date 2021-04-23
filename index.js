const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/pie-shop', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Database connected');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.urlencoded({ extended: true }));

const pieSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    price: Number,
    details: String
})
const Pie = mongoose.model('Pie', pieSchema);


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/template', (req, res) => {
    res.render('template');
});

app.get('/pies/all', async (req, res) => {
    const pies = await Pie.find({});
    res.render('products', { pies });
});

app.get('/pies/fruit', async (req, res) => {
    const pies = await Pie.find({ category: 'fruit' });
    res.render('products', { pies });
});

app.get('/pies/seasonal', async (req, res) => {
    const pies = await Pie.find({category: 'seasonal'});
    res.render('products', { pies });
});

app.get('/cheesecakes', async(req, res) => {
    const pies = await Pie.find({category: 'cheesecake'});
    res.render('products', { pies });
})

app.listen(3000, () => {
    console.log('Serving on localhost via port 3000');
});