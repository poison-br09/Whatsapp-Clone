import express from 'express';

import { addUser, getUsers } from '../controller/user.controller.js';
import { newConversation } from '../controller/conversation.controller.js';
const route = express.Router();


// Route.post('/add', () => {
    
// })


route.post('/add', addUser);
route.get('/users', getUsers);
route.post('/conversations/add', newConversation);

export default route;