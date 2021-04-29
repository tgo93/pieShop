const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const Product = require('./models/product');


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


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/template', (req, res) => {
    res.render('template');
});

app.get('/products/all', async (req, res) => {
    const products = await Product.find({});
    res.render('products', { products });
});

app.get('/products/fruitpies', async (req, res) => {
    const products = await Product.find({ category: 'fruit' });
    res.render('products', { products });
});

app.get('/products/seasonalpies', async (req, res) => {
    const products = await Product.find({category: 'seasonal'});
    res.render('products', { products });
});

app.get('/products/cheesecakes', async(req, res) => {
    const products = await Product.find({category: 'cheesecake'});
    res.render('products', { products });
})

app.listen(3000, () => {
    console.log('Serving on localhost via port 3000');
});