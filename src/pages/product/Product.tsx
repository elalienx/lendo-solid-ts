// Node modules
import { useParams } from "@solidjs/router";

// Project files
import type ProductType from "types/Product";

interface Props {
  data: ProductType[];
}

export default function Product({ data }: Props) {
  // Global state
  const params = useParams();
  console.log(data);

  return (
    <div id="product">
      <h1>Products</h1>
      <p>Id: #{params.id}</p>
    </div>
  );
}
