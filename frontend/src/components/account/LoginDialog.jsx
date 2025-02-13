import React from "react";
import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";

import { addUser } from "../../service/api";

// Styled components
const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px;
`;

const QRcode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px", // margin as intended
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 20px;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "50%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
};

// Dialog Component
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    const token = res?.credential; // Extract the correct token
    if (token) {
      try {
        const decodedToken = jwtDecode(token); // Decode the JWT token
        setAccount(decodedToken); // Set the account in the context
        console.log(decodedToken); // Log the decoded token
        await addUser(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.error("No token found in response");
    }
  };

  const onLoginError = (res) => {
    // console.log(res);
    console.log("Error");
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title variant="h6">To use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap Menu or Settings and select Linked Devices
            </ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </StyledList>
        </Container>

        <Box>
          <QRcode src={qrCodeImage} alt="QR Code" />
          <Box>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
