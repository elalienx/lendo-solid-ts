// Project files
import ImageThumbnail from "components/image-thumbnail/ImageThumbnail";
import PriceTag from "components/price-tag/PriceTag";
import type Product from "types/Product";
import "./item-product.css";

interface Props {
  item: Product;
}

export default function ItemProduct({ item }: Props) {
  const { id, name, brand, available, price } = item;

  // Properties
  const link = available ? `product/${id}` : "#";
  const parsedPrice = Number(price);

  return (
    <a href={link} class={`item-product ${!available && "dissabled"}`}>
      {/* Left mobile, top desktop */}
      <ImageThumbnail image={""} alt={""} />

      {/* Middle */}
      <div class="text-group">
        <p class="name">{name}</p>
        <small class="brand">{brand}</small>
        {!available && <small class="text-warning">Not available</small>}
      </div>

      {/* Right mobile, bottom desktop */}
      <PriceTag price={parsedPrice} />
    </a>
  );
}
