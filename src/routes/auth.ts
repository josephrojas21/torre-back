import { Router } from  'express';
const router: Router = Router();

import { TokenValidation } from '../libs/verifyToken'

import { profile, signin, signup } from '../controllers/auth.controller'

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/profile',TokenValidation, profile);


export default router;