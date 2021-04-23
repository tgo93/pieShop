// DB seed file, temporary
const mongoose = require('mongoose');

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

const pieSchema = new mongoose.Schema({
    image: String,
    name: String,
    description: String,
    price: Number,
    details: String,
    category: String
})
const Pie = mongoose.model('Pie', pieSchema);

const seeds = [
    {
        image: 'products/cheesecakesmall.jpg',
        name: 'Cheesecake',
        description: 'Plain cheese cake. Plain pleasure.',
        price: 12.95,
        category: 'cheesecake'
    },     
    {
        image: 'products/applepiesmall.jpg',
        name: 'Apple Pie',
        description: 'Our Famous Apple Pie.',
        price: 14.95,
        category: 'fruit'
    },     
    {
        image: 'products/cranberrypiesmall.jpg',
        name: 'Cranberry pie',
        description: 'A Christmas favorite',
        price: 18.95,
        category: 'fruit'
    },     
    {
        image: 'products/cherrypiesmall.jpg',
        name: 'Cherry pie',
        description: 'A summer classic!',
        price: 18.95,
        category: 'fruit'
    },     
    {
        image: 'products/peachpiesmall.jpg',
        name: 'Peach Pie',
        description: 'Sweet as a peach',
        price: 18.95,
        category: 'fruit'
    }, 
    {
        image: 'products/pumpkinpiesmall.jpg',
        name: 'Pumpkin Pie',
        description: 'Our Halloween favourite',
        price: 18.95,
        category: 'seasonal'
    },
    {
        image: 'products/christmasapplepiesmall.jpg',
        name: 'Christmas apple pie',
        description: 'Happy holidays with this pie!',
        price: 19.95,
        category: 'seasonal'
    },    
    {
        image: 'products/blueberrycheesecakesmall.jpg',
        name: 'Blueberry cheese cake',
        description: 'You\'ll love it!',
        price: 17.95,
        category: 'cheesecake'
    },    
    {
        image: 'products/rhubarbpiesmall.jpg',
        name: 'Rhubarb Pie',
        description: 'My God, so sweet!',
        price: 21.95,
        category: 'fruit'
    },
    {
        image: 'products/strawberrypiesmall.jpg',
        name: 'Strawberry Pie',
        description: 'Our delicious strawberry pie!',
        price: 18.95,
        category: 'fruit'
    },
    {
        image: 'products/strawberrycheesecakesmall.jpg',
        name: 'Strawberry Cheesecake',
        description: 'Our delicious strawberry pie!',
        price: 18.95,
        category: 'cheesecake'
    }
]

Pie.insertMany(seeds);
