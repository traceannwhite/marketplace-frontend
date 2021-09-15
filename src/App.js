import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <AllProducts />
          </Route>
          <Route exact path="/products/:id">
            <SingleProduct />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
