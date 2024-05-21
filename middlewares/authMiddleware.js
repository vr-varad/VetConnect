const jwt = require('jsonwebtoken');


module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
            req.body.userId = decodedData?.id;
        } else {
            return res.json({success: false, message: 'Unauthorized' });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({success: false, message: 'Unauthorized' });
    }
}