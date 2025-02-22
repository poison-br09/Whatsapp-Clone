import { useContext, useEffect, useState } from "react";

import { Box, styled, Divider } from "@mui/material";

import { getUser } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";

import Conversation from "./Conversation";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      let response = await getUser();

      // Check if response is actually an array
      if (!Array.isArray(response)) {
        console.error("Response is not an array:", response);
        return;
      }

      // Filter data with extra checks
      const filteredData = response.filter((user) => {
        return (
          user.name &&
          typeof user.name === "string" &&
          user.name.trim() !== "" &&
          user.name.toLowerCase().includes(text.toLowerCase())
        );
      });

      setUsers(filteredData);
    };

    fetchData();
  }, [text]);

  return (
    <Component>
      {users.map((user) => {
        user.sub !== account.sub && (
          <>
            <Conversation user={user} />
            <StyledDivider />
          </>
        );
      })}
    </Component>
  );
};

export default Conversations;
