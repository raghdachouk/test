import React from "react";
import { useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from "./queries";

export const Child2 = (props) => {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <div>Other Child User: {data.isLoggedIn ? "LoggedIN" : "LoggedOUT"}</div>
  );
};
