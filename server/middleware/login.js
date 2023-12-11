import bcrypt from 'bcrypt';
import passport from 'passport';

export default function login(req, res){
  passport.authenticate('local')(req, res, (err, user) => {
    if(err) return res.status(500).json({ passed: false });
    if(!user) return res.status(403).json({ passed: false });
    return res.status(200).json({passed: true});
  });
}
