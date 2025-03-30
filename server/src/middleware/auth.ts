import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// interface JwtPayload {
//   username: string;
// }

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>
  if (token == null) {
    // If there is no token, return a 401 Unauthorized response
    return res.sendStatus(401);
  } else {
    return next();
  }
};
