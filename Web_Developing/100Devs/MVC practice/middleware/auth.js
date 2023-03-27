module.exports = {
    ensureAuth: function (req, res, next) {
        console.log(req.isAuthenticated);
        console.log(req)
        if(req.isAuthenticated()) {
            console.log('Authenticated')
            return next()
        } else {
            console.log('Not Authenticated')
            res.redirect('/')
        }
    },
    ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/dashboard')
        } else {
            return next()
        }
    }
}
