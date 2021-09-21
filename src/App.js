import React from "react";
import "./styles.css";

import { ApolloProvider, useQuery } from "@apollo/client";

import { client } from "./cache";
import { IS_LOGGED_IN, SET_LOGGED_IN } from "./queries";
import { Child2 } from "./other-child";

const setLogin = (logged) => {
  client.writeQuery({
    query: SET_LOGGED_IN,
    data: {
      isLoggedIn: logged
    }
  });
};

const Child = (props) => {
  const { data } = useQuery(IS_LOGGED_IN);
  return <div>User: {data.isLoggedIn ? "LoggedIN" : "LoggedOUT"}</div>;
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Child />
        <button onClick={() => setLogin(true)}>Login</button>
        <button onClick={() => setLogin(false)}>LogOut</button>
        <hr />
        <Child2 />
      </div>
    </ApolloProvider>
  );
}
