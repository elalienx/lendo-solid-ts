// Node modules
import { Router, Route } from "@solidjs/router";

// Project files
import NavigationBar from "components/navigation-bar/NavigationBar";
import Checkout from "pages/checkout/Checkout";
import Home from "pages/home/Home";
import Page404 from "pages/page-404/Page404";
import Product from "pages/product/Product";

export default function App() {
  return (
    <div class="app">
      <NavigationBar number={5} />
      <Router>
        <Route path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/checkout" component={Checkout} />
        <Route path="*" component={Page404} />
      </Router>
    </div>
  );
}
