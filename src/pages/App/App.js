import { useState } from 'react';
import './App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom';



function App() {
  const [user, setUser] = useState(null); // changing state whether user is present or not

  return (
    <main className="App">
      {
        user ?
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
          :
          <AuthPage />
      }
    </main>
  );
  // if user is truthy, render NewOrderPage 
  // if user is falsey, render AuthPage
}

export default App;
