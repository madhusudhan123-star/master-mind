import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "990220425416-j6s1cg42i5jiivr282jfhfj8l5te2ufv.apps.googleusercontent.com"; // Your Google Client ID

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App min-h-screen flex flex-col">
        <BrowserRouter>
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
