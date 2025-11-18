import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout.jsx';
import { ProductDetailsPage } from './pages/product/Details/ProductDetailsPage.jsx';
import { ProductListPage } from './pages/product/List/ProductListPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/home/" element={<ProductListPage />} />
          <Route path="/home/product/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
