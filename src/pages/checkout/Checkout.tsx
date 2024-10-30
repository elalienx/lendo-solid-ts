import NavigationBar from "components/navigation-bar/NavigationBar";

export default function Checkout() {
  return (
    <div id="checkout">
      <NavigationBar number={5} />
      <div class="page">
        <h1>Your cart</h1>
      </div>
    </div>
  );
}
