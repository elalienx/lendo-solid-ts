// Node modules
import { A } from "@solidjs/router";

// Project files
import Logo from "assets/images/logo.svg";
import WidgetCart from "components/widget-cart/WidgetCart";
import "./navigation-bar.css";

interface Props {
  /** The number of items the user has in the shopping cart. */
  number: number;
}

export default function NavigationBar({ number }: Props) {
  return (
    <nav class="navigation-bar">
      <A href="/">
        <img
          alt="The company logo with the text Shopping Cart"
          class="logo"
          src={Logo}
        />
      </A>
      <WidgetCart number={number} />
    </nav>
  );
}
