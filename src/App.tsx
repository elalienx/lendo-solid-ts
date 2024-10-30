// Node modules
import { Router, Route } from "@solidjs/router";

// Project files
import NavigationBar from "components/navigation-bar/NavigationBar";
import { items } from "data/inventory.json";
import Checkout from "pages/checkout/Checkout";
import Home from "pages/home/Home";
import Page404 from "pages/page-404/Page404";
import Product from "pages/product/Product";

export default function App() {
  // Properties
  const HomePage = <Home data={items} />;
  const ProductPage = <Product data={items} />;

  return (
    <div class="app">
      <Router>
        {/* <NavigationBar number={5} /> */}
        <Route path="/" component={() => HomePage} />
        <Route path="/product/:id" component={() => ProductPage} />
        <Route path="/checkout" component={Checkout} />
        <Route path="*" component={Page404} />
      </Router>
    </div>
  );
}
