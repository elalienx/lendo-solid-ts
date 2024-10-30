// Project files
import "./price-tag.css";

interface Props {
  /** The product price. */
  price: number;
}

export default function PriceTag({ price }: Props) {
  // Properties
  const locale = "sv-SE";
  const currency = "SEK";
  const formatedPrice = new Intl.NumberFormat(locale).format(price);
  console.log("PriceTag formatedPrice (should we use memo?)", formatedPrice);

  return (
    <span class="price-tag">
      <span class="price">{formatedPrice}</span>
      <small class="currency">{currency}</small>
    </span>
  );
}
