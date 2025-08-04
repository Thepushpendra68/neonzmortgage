require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path')
const next = require('next');

const nextApp = next({ dev: false, dir: './app' });
const handle = nextApp.getRequestHandler();


//routes import
const router = require('./routes')

const cors = require('cors');
const app = express();


const PORT = process.env.PORT || 4011;


app.use(cors({ credentials: true, origin: ['http://localhost:3000', 'http://localhost:3001', 'https://www.neonmortgage.com/'] }));
//app.use('/api/checkout', cors());

app.use(express.json({limit: '8mb'}));
app.use(cookieParser())



app.use('/', router)





app.use('/admin', express.static('admin'))
app.use('/uploads', express.static('uploads'))

app.get('/admin/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin', 'index.html'))
  });
app.all('*', (req, res) => {
    return handle(req, res);
});





nextApp.prepare().then(() => {
    mongoose.connect('mongodb://localhost:27017/neon').then(() => {

app.listen(PORT, () => {
    console.log('app is listening')
})
})
})

// mongoose.connect('mongodb://localhost:27017/neon').then(() => {

// app.listen(PORT, () => {
//     console.log('app is listening')
// })
// })