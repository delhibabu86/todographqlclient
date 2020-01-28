
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
<ApolloProvider client={client}>
<App />
</ApolloProvider>
, document.getElementById('root')
);