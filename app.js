const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res, next) => {
    res.send({
        title: "Meu primeiro servidor Express do Galo",
        version: "0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});