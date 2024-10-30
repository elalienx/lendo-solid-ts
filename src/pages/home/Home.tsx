// Project files
import ItemProduct from "components/item-product/ItemProduct";
import NavigationBar from "components/navigation-bar/NavigationBar";
import type Product from "types/Product";
import "./home.css";

interface Props {
  data: Product[];
}

export default function Home({ data }: Props) {
  // Components
  const Items = data.map((item) => <ItemProduct item={item} />);

  return (
    <div id="home" class="page">
      <NavigationBar number={5} />
      <h1>Our products</h1>
      <section class="grid">{Items}</section>
    </div>
  );
}
