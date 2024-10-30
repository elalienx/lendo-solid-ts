// Project files
import type Product from "types/Product";

interface Props {
  data: Product[];
}

export default function Home({ data }: Props) {
  return <h1>Home</h1>;
}
