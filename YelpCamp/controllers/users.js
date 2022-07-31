const User = require("../models/user");
const ExpressError = require("../utils/ExpressError");
const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})");
module.exports.renderRegister = (req, res) => {
     res.render("users/register")
}

module.exports.createUser = async (req, res, next) => {
     console.log(req.body)
     try {
          const { email, username, password } = req.body;
          const user = new User({ email, username });
          if (!(3< username.length <15 && strongRegex.test(password))){
               throw new ExpressError("Username/password do not match the requirements",406)
          }
          const registeredUser = await User.register(user, password);

          req.login(registeredUser, err => {
               if (err) return next(err);
               req.flash("success", "Welcome to Yelp Camp!");
               res.redirect("/campgrounds");
          })


     } catch (error) {
          req.flash("error", error.message)
          res.redirect("/register");
     }

}

module.exports.renderLogin = (req, res) => {
     res.render("users/login")
}

module.exports.completeLogin =  (req, res) => {
     const returnToPath = req.session.returnTo || "/campgrounds"
     req.flash("success", "Welcome Back!")
     res.redirect(returnToPath)
}

module.exports.logout = (req, res, next) => {
     req.logout();
     req.flash("success", "Logged Out");
     res.redirect("/campgrounds")

}
