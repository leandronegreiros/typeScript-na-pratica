import { Router } from 'express';
import UserCopntroller from './controllers/UserController';

const routes = Router();

routes.get('/users', UserCopntroller.index);
routes.post('/users', UserCopntroller.create);

export default routes ;