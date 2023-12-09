import posts from './routes/post-route.js';
import users from './routes/user-route.js';
import login from './middleware/login.js';
import passportSetup from './config/passportSetup.js';
import isAuthenticated from './middleware/auth.js';

import bodyParser from 'body-parser';
import cors from 'cors'
import express from 'express';
import dotenv from "dotenv"
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
passportSetup(passport)

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false, limit: 100000, parameterLimit: 20}))
app.use(session({secret: process.env.SECRET_KEY, resave: false, saveUninitialized: true,}));
app.use(passport.session());
app.use('/users', isAuthenticated, users);
// app.use('/posts', isAuthenticated, posts);

app.post("/login", login);

app.listen(process.env.PORT, ()=>{});