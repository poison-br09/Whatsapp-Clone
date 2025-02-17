import { Box } from '@mui/material';


import ChatHeader from './ChatHeader';
import Message from './Messages';

const ChatBox = () => {
    return (
        // <div> This is a Component</div>
        <Box>
            <ChatHeader />
            <Message />
        </Box>
    )
}

export default ChatBox;