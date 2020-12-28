const express = require('express');
const app = express();
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes)
const PORT = process.env.PORT || 3001;
//gets what we need out of the way^

//goes last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
