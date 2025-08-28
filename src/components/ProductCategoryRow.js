export default function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th className="category-row" colSpan="3">
        {category}
      </th>
    </tr>
  );
}