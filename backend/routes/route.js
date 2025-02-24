import express from 'express';

import { addUser, getUsers } from '../controller/user.controller.js';
import { newConversation } from '../controller/conversation.controller.js';
import { getConversation } from '../../frontend/src/service/api.js';
const route = express.Router();


// Route.post('/add', () => {
    
// })


route.post('/add', addUser);
route.get('/users', getUsers);
route.post('/conversations/add', newConversation);
route.post('/conversations/get', getConversation);

export default route;