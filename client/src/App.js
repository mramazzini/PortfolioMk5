import Home from "./pages/Home";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

let httpLink;
// Construct our main GraphQL API endpoint
if (process.env.NODE_ENV === "production") {
  httpLink = createHttpLink({
    uri: "https://matteo-ramazzini.herokuapp.com/graphql",
    //uri: "/graphql",
  });
} else {
  httpLink = createHttpLink({
    uri: "http://localhost:3001/graphql",
    //uri: "/graphql",
  });
}

const client = new ApolloClient({
  defaultOptions: {
    mutate: {
      // Set `omitTypename` to `true` to automatically remove `__typename` from mutation requests
      // This option is available in Apollo Client v3.4.0 or later
      omitTypename: true,
    },
  },
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

// surround a component with the `RequireAuth` component to require authentication to access the component
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
