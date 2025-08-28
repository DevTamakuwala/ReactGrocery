import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { PRODUCTS } from './components/products';

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}