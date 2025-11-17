import { Link } from 'react-router-dom';

import { useGetProductsQuery } from '../../../services/products/productApi.js';

export const ProductListPage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div>
      <h1>Product List Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/spa/product/${product.id}`}>
              {product.brand} {product.model} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
