import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./store/globalState";

import Nav from "./components/Nav.js";
import Home from "./pages/Home";
import AddSpellPage from "./pages/AddSpellPage";
import { Content } from "./pages/Home.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <StoreProvider>
          <Nav />
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/addspell" component={AddSpellPage} />
            </Switch>
          </Content>
        </StoreProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
