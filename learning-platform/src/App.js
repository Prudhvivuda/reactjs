import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ModulesPage from './pages/ModulesPage';
import HomePage from './pages/HomePage';
import Instructors from './pages/Instructors';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/instructors" element={<Instructors />} />

        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
