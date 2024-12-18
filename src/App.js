import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const clientId = "990220425416-j6s1cg42i5jiivr282jfhfj8l5te2ufv.apps.googleusercontent.com"; // Your Google Client ID

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
