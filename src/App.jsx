import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductListPage } from './pages/product/List/ProductListPage.jsx';
import { ProductDetailsPage } from './pages/product/Details/ProductDetailsPage.jsx';
import { MainLayout } from './layouts/MainLayout.jsx';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/spa/" element={<ProductListPage />} />
          <Route path="/spa/product/:productId" element={<ProductDetailsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
