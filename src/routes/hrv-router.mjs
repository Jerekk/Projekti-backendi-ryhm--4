// readinessRouter.js

import express from 'express';
import {getHrv} from '../controllers/hrv-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const hrvRouter = express.Router();


// /user/:id endpoint
hrvRouter.route('/')
  // get info of a user
  .get(authenticateToken, getHrv);

export default hrvRouter;
