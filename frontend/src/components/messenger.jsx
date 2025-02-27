import React from "react"; // Import React for JSX
import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material"; // Import AppBar, Toolbar, Typography from Material-UI
import { AccountContext } from "../context/AccountProvider";

// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  const [openChat, setOpenChat] = React.useState(account ? true : false); // Open chat only if account exists

  return (
      <Component>
          {account ? (
              <>
                  <Header>
                      <Toolbar></Toolbar>
                  </Header>
                  <ChatDialog open={openChat} onClose={() => setOpenChat(false)} />
              </>
          ) : (
              <>
                  <LoginHeader>
                      <Toolbar></Toolbar>
                  </LoginHeader>
                  <LoginDialog />
              </>
          )}
      </Component>
  );
};

export default Messenger; // Export the Messenger component
