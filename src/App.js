import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import DashboardLayout from './Pages/DashboardLayout';
import MyRoutes from './MyRoutes';
import { UserProvider } from './context/UserContext';
function App() {
  return (
    <UserProvider>

    <Router>
      <Routes>
        {/* Public Layout with Header */}
        <Route path="/*" element={<Layout />}>
          <Route path="*" element={<MyRoutes />} />
        </Route>

        {/* Dashboard Layout without Header */}
        <Route path="/admin/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
