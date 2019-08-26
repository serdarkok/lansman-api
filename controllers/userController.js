const User = require('../models/Users');
const Bcrypt = require('bcryptjs');
const Jwt = require('jsonwebtoken');

exports.postNewUserController = async (req, res) => {
    Bcrypt.hash(req.body.password, 10, (err, hashed)=> {
        req.body.password = hashed;
        console.log(req.body);
        const _r = new User(req.body);
        _r.save((err, data) => {
            if (err) {
                res.status(400).send({
                    status: false,
                    message: err
                });
            } else {
                res.status(200).send({
                    status: true,
                    message: data
                });
            }
        });
    });
};

exports.postLoginController = async (req, res) => {
    const {email, password} = req.body;
    console.log(email, password);
    try{
        const _r = await User.findOne({
            email
        });
        if(_r) {
            Bcrypt.compare(password, _r.password)
            .then((result) => {
                if (result) {
                    const _token = Jwt.sign({id: _r._id, mail: _r.mail}, process.env.API_KEY, {
                        expiresIn: 120
                    });
                    res.status(200).send({
                        status: true,
                        message: _r,
                        token: _token
                    });
                }
                else
                {
                    res.status(400).send({
                        status: false,
                        message: 'Kullanıcı adı veya şifreniz hatalıdır'
                    });
                }

            });
        }
        else {
            res.status(400).send({
                status: false,
                message: 'Kullanıcı adı veya şifreniz hatalıdır'
            });
        }

    }
    catch(err) {
        res.status(400).send({
            status: false,
            message: err
        });
    }
};

exports.deleteAllUserController = async (req, res) => {
    const _result = await User.deleteMany({});
    if(_result) {
        res.status(200).send({
            status: true,
            message: 'Tüm kullanıcılar silindi.'
        });
    }
}

exports.userListController = async (req, res) => {
    const _list = await User.find({});
    res.status(200).send(_list);
}
