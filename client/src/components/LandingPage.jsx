import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center p-6 text-[#2D2D2D]">
      <header className="w-full flex justify-between items-center max-w-6xl py-4">
        <h1 className="text-2xl font-bold text-[#E63946]">PopDish Zurich</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-white text-[#E63946] border border-[#E63946] rounded-xl font-medium"
          >
            Log In
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="px-4 py-2 bg-[#E63946] text-white rounded-xl font-medium"
          >
            Sign Up
          </button>
        </div>
      </header>
      <main className="text-center mt-24 max-w-xl">
        <h2 className="text-4xl font-semibold mb-4">Discover Zurich’s Best Pop-Up Food Spots</h2>
        <p className="text-lg text-gray-600 mb-8">Explore limited-time food experiences near you. Sign up to get personalized updates and access to exclusive pop-ups.</p>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-3 bg-[#E63946] text-white text-lg rounded-xl font-semibold"
        >
          Get Started
        </button>
      </main>
    </div>
  );
}
