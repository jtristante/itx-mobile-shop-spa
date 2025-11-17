import { useParams } from 'react-router-dom';

import { useGetProductDetailQuery } from '../../../services/products/productApi.js';

export const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetProductDetailQuery(productId);

  if (isLoading) return <p>Loading product details...</p>;
  if (error) return <p>Error loading product details</p>;

  return (
    <div>
      <h1>Product Details Page</h1>
      {product && (
        <div>
          <h2>
            {product.brand} - {product.model}
          </h2>
          <p>Price: {product.price}'</p>
          <p>CPU: {product.CPU}</p>
          <p>RAM: {product.RAM}</p>
          <p>operatingSystem: {product.operatingSystem}</p>
          <p>screenResolution: {product.screenResolution}</p>
        </div>
      )}
    </div>
  );
};
