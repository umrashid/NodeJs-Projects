const express = require('express');


const app = express();

app.use((req, res, next) => {
    console.log("in the middleware");
    res.send("String");
});

app.listen(3000, () => {
    console.log("App is running");
})