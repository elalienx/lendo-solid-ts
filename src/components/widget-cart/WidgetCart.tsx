// Project files
import Badge from "components/badge/Badge";
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";
import "./widget-cart.css";

interface Props {
  /** The number of items the user has in the shopping cart. */
  number: number;
}

/**
 * Note:
 * This is a <div> for easier testing and framework portability.
 * Navigation is handled by the parent component.
 */
export default function WidgetCart({ number }: Props) {
  return (
    <div class="widget-cart">
      <FontAwesomeIcon icon={["fas", "bag-shopping"]} />
      <span class="label">Cart</span>
      {number > 0 && <Badge number={number} />}
    </div>
  );
}
