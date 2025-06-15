import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUpPage from './components/SignUpPage';
import FeedPage from './components/FeedPage';
import UserProfileDashboard from './components/UserProfileDashboard';
import LoginPage from './components/LoginPage';
import DarkThemeWrapper from './components/DarkThemeWrapper';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <DarkThemeWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/profile" element={<UserProfileDashboard />} />
        </Routes>
      </DarkThemeWrapper>
    </BrowserRouter>
  );
}
