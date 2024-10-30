// Node modules
import { useParams } from "@solidjs/router";

// Project files
import type Product from "types/Product";

interface Props {
  data: Product[];
}

export default function Product({ data }: Props) {
  // Global state
  const params = useParams();

  return (
    <div id="product">
      <h1>Products</h1>
      <p>Id: #{params.id}</p>
    </div>
  );
}
