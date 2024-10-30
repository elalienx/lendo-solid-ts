// Project files
import Logo from "../assets/images/logo.svg";
import "./navigation-bar.css";

interface Props {
  /** The number of items the user has in the shopping cart. */
  number: number;
}

export default function NavigationBar({ number }: Props) {
  return (
    <nav class="navigation-bar">
      <img
        alt="The company logo with the text Shopping Cart"
        class="logo"
        src={Logo}
      />
      <p>Items in cart #{number}</p>
      {/* <ButtonCart number={number} /> */}
    </nav>
  );
}
