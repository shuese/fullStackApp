import mongoose from 'mongoose';
import passport from 'passport';
import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();
import User from '../models/user';

router.post('/signup', (req: any, res: any) => {
  if (!req.body) { return res.sendStatus(400); }
  console.log(req.body, 'req.body');
  const user = new User(req.body);

  user.save((err: any) => {
    if (err) {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      return res.status(403).send({message: err});
=======
      return res.status(404).send({message: err});
>>>>>>> Stashed changes
=======
      return res.status(404).send({message: err});
>>>>>>> Stashed changes
    }
    return res.send({message: 'succes'});
  });
});

export default router;
