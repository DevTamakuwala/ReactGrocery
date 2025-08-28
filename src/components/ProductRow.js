export default function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span className="out-of-stock">
      {product.name}
    </span>;

  return (
    <tr className="product-row">
      <td>
        <img
          className="product-image"
          src={product.imageUrl}
          alt={product.name}
        />
      </td>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}