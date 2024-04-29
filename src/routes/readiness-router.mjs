// readinessRouter.js

import express from 'express';
import {getReadiness} from '../controllers/readiness-contoller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const readinessRouter = express.Router();


// /user/:id endpoint
readinessRouter
  .route('/')
  // get info of a user
  .get(authenticateToken, getReadiness);

export default readinessRouter;
