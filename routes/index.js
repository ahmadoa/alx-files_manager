import AppContoller from '../controllers/AppController';
import UserController from '../controllers/UsersController';

const express = require('express');

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UserController.postNew);

export default router;
