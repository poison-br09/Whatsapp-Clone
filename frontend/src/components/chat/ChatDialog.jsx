import React from "react";

import { Box, Dialog, styled } from "@mui/material";


import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";

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
  return (
    <Dialog open={open} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'}>
      <Component>
        <LeftComponent>
          <Menu />
        </LeftComponent>
        <RightComponent>
          <EmptyChat />
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
