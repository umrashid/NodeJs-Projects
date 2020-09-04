//Express Imports
const express = require('express');
const app = express();
const path = require('path');
// Routes
const sayRoutes = require('./routes/say');
//Constatnts
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(sayRoutes);
app.use('/index', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views', 'index.html'))
})
app.use('/manutd', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'manutd.html'));
})
app.use((req, res, next) => {
    res.send('<h1>Main Page</h1>');
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
