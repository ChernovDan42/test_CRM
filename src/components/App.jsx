import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { LayOut } from './LayOut/LayOut';

const Dashboard = lazy(() => import('./Pages/Dashboard'));
const Product = lazy(() => import('./Pages/Product'));
const Customers = lazy(() => import('./Pages/Customers'));
const Income = lazy(() => import('./Pages/Income'));
const Promote = lazy(() => import('./Pages/Promote'));
const Help = lazy(() => import('./Pages/Help'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </>
  );
};
