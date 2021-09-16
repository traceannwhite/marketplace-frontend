import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Footer from "./Components/Footer/Footer";

function App() {
  // const url = "https://https://backend-marketplace-tw.herokuapp.com/";
  // call API details from Heroku

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/products"
            render={(routerProps) => <AllProducts {...routerProps} />}
          />
          <Route
            path="/products/:id"
            render={(routerProps) => <SingleProduct {...routerProps} />}
          />
          <Route
            path="/cart"
            render={(routerProps) => <Cart {...routerProps} />}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
