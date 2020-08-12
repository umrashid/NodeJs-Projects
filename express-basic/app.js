//Express Imports
const express = require('express');
const app = express();
// Routes
const sayRoutes = require('./routes/say');
//Constatnts
const PORT = 3000;

app.use(sayRoutes);
app.use((req, res, next) => {
    res.send('<h1>Main Page</h1>');
});

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
