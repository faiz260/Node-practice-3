data = {
    name: 'faiz',
    age: 19
}
module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('home', { data: data });
    });
    app.get('/home', (req, res) => {
        res.send("This is Home.");
    });

    app.get('/about', (req, res) => {
        res.send("This is about.");
    });
    app.get('/profile/:id', (req, res) => {
        res.send("Your requested user no " + req.params.id)
        console.log(req);
    });
}