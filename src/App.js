import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./assets/style/main.scss";
import Nav from "./components/Nav";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Nav />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/cart" component={CartPage} />
            </Switch>
          </main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
