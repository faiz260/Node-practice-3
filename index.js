const express = require('express');
const app = express();
const port = 8888;

app.use(express.static('public'));

// app.set('view engine', 'ejs');

require('./routes')(app)

app.listen(port, () => {
    console.log('server is running on port ' + port)
})