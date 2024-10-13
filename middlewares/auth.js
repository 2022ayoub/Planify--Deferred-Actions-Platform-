function isAuthenticated(req, res, next) {
    if (req.session.userAuth) {
        next();
    } else {
        res.redirect('/auth/login'); 
    }
}
module.exports= isAuthenticated