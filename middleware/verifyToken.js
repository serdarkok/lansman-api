const Jwt = require('jsonwebtoken');

// Token Control

module.exports = (req, res, next) => {
    const _token = req.body.token || req.query.token || req.headers["x-access-token"];
    console.log(_token);

    if(!_token) {
        res.status(400).send({
            status: false,
            message: 'Giriş izniniz bulunmamaktadır'
        });
    }
    else
    {
        Jwt.verify(_token, process.env.API_KEY, (error, decoded) => {
            if(error) {
                res.status(400).send({
                    status: false,
                    message: 'Beklenmedik bir hata oluştu'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
}

// Evet