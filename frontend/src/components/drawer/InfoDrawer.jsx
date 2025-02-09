import { Drawer, Typography, Box, styled } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";

import Profile from "./Profile";

const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: f1ex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 60px;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};

const Text = styled(Typography)`
    font-size: 18px;
`

const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={handleClose} />
        <Text>Profile </Text>
      </Header>

      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
