import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";

const Header = styled(Box)`
  height: 44px;
  background-color: #ededed;
  display: flex;
  padding: 8px 16px;
  align-items: center;
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
  font-size: 16px;
`;

const OnlineStatus = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 24px;
        color: #000;
    }
`;

const ChatHeader = () => {
  return (
    <Header>
      <Image src={""} alt="dp" />
      <Box>
        <Name>Name</Name>
        <OnlineStatus>Online Status</OnlineStatus>
      </Box>
      <RightContainer>
        <Search />
        <MoreVert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
