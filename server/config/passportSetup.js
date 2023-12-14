import  {Strategy as LocalStrategy} from 'passport-local'
import User from '../models/User.js';

export default (passport) => {
  passport.use(new LocalStrategy(
    {usernameField : 'email', passwordField: 'password', session: true, passReqToCallback: false}, 
    async (email, password, done)=> {
      const user_account = await User.findOne({email});
      if(!user_account.validPassword(password)) return done(null, false);
      return done(null, user_account, false);
    })
  )
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });
      
  passport.deserializeUser((email, done) => {
    User.findOne({ email })
    .then(personAccount => {
        if (personAccount) return personAccount;
      })
    .then((err, account) => {done(account, err);})
  }); 
}