import React from "react";
import { useContext } from "react";

import { Box, Dialog, styled } from "@mui/material";

import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { AccountContext } from "../../context/AccountProvider";

const dialogStyle = {
  height: "96%",
  width: "100%",
  margin: "20px",
  borderRadius: "20px",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)`
  min-width: 450px;
`;

const RightComponent = styled(Box)`
  width: 75%;
  min-width: 300px;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialog = ({ open, onClose }) => {
  const { person } = useContext(AccountContext);

  return (
    <Dialog
      open={open}
      PaperProps={{ sx: dialogStyle }}
      hideBackdrop={true}
      maxWidth={"md"}
    >
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
