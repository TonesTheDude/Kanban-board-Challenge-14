import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user) {
    // If the user does not exist, return a 401 Unauthorized response
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    // If the password is incorrect, return a 401 Unauthorized response
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  // If the user exists and the password is correct, create a JWT token
  const secretKey = process.env.JWT_SECRET_KEY || 'your_secret_key'; // Use a secret key from environment variables
  const token = jwt.sign(
    { username: user.username }, // Payload for the JWT token
    secretKey,
    { expiresIn: '1h' } // Set the expiration time for the token (e.g., 1 hour)
  );
  // Return the JWT token in the response
  return res.json({token}); // Send the token back to the client
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
