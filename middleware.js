const isLoggedIn = (req,res,next)=>{
    console.log(req.isAuthenticated)
    if(!req.isAuthenticated()){
        req.flash('error','You Need to Login First!')
        return res.redirect('/login');
    }
    next();
}

module.exports = {
    isLoggedIn
}

