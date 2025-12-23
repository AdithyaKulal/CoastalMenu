import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import ErrorBoundary from './ErrorBoundary';
import RequireAuth from './RequireAuth';
import Profile from './pages/Profile';
import { useContext } from 'react';
import AuthWatcher from './AuthWatcher';
import ClerkFlagContext from './ClerkFlagContext';
function App() {
  const clerkEnabled = useContext(ClerkFlagContext);

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Navbar />
      </ErrorBoundary>
      <div className="app-layout">
        {clerkEnabled && <AuthWatcher />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
