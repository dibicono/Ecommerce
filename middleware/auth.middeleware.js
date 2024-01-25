const jwt = require('jsonwebtoken');

const chToken = async (req, res, next) => {
    try {
        const headers = req.headers;
        if (headers.authorization & headers.authorization.split(' ')[0] === 'Bearer') {
            const token = headers.authorization.split(' ')[1];
            if (jwt.verify(token, process.env.JWT_SIGNATURE)) {
                next();
            }
        } else{
            res. status(481).json({
                msg; 'no hay token bearer'
            });
        }
        };
}

module.exports = chkToken;