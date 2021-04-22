const validateAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        return next();
    } else {
        return res.status(500).send('Hold broke, you are off route');
    }
};

module.exports = validateAdmin;

//must run after validate-session