// Project files
import EmptyState from "components/empty-state/EmptyState";
import ItemProduct from "components/item-product/ItemProduct";
import NavigationBar from "components/navigation-bar/NavigationBar";
import type Product from "types/Product";
import EmptyStateText from "./empty-state-text.json";
import "./home.css";

interface Props {
  data: Product[];
}

export default function Home({ data }: Props) {
  // Safeguards
  if (!data.length) return <EmptyState item={EmptyStateText} />;

  // Components
  const Items = data.map((item) => <ItemProduct item={item} />);

  return (
    <div id="home">
      <NavigationBar number={5} />
      <div class="page">
        <h1>Our products</h1>
        <section class="grid">{Items}</section>
      </div>
    </div>
  );
}
