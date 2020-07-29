const User = require('./modules/user');
const jwt = require('jsonwebtoken');
module.exports = function (app) {

    app.post('/users', async (req, res) => {
        const userInfo = req.body;
        const savedUser = await User.create({ username: userInfo.username, password: userInfo.password, email: userInfo.email})
        res.send(savedUser);
    });
    
    app.post('/login', async (req, res) => {
        const userInfo = req.body.user;
        const profile = await User.findOne({ username: userInfo.username, password: userInfo.password});
        const token = jwt.sign({ email: profile.email, iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
        res.send({username: profile.username, jwt: token});
    });

    app.get('/profile', async (req, res) => {
        let token = req.headers.authorization 
        token = token.substr(7)
        const decoded = jwt.decode(token, 'shhhhh')
        const profile = await User.findOne({ email: decoded.email });
        res.send({ username: profile.username });
    });
}