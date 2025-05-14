import { Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SocialMedia from "./pages/SocialMedia";
import EmailMarketing from "./pages/EmailMarketing";
import Blogs from "./pages/Blogs";

export default function App() {
  const location = useLocation();
  const isNotHome = location.pathname !== "/"; 

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100">
      <main className="container w-full py-8 min-h-screen p-6 md:p-12 m-auto">
        
        {isNotHome && (
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              ← Back to Home
            </Link>
          </div>
        )}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>

        <a
          href="https://krishikavyas.site" 
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-blue-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
        >
          View My Portfolio
        </a>

      </main>
    </div>
  );
}
