import bcrypt from 'bcrypt';
import passport from 'passport';

export default function login(req, res, next){
  passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: '/login'
  })(req, res, next);
}
