import bcrypt from 'bcrypt';
import passport from 'passport';

export default function login(req, res){
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).json({ success: false, error: 'Internal Server Error' });
    if (!user)return res.status(403).json({ success: false, error: 'Invalid credentials' });
    return res.status(200).json({ success: true, user: req.user });
  })(req, res);
}
