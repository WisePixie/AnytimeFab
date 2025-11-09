import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";

import { Services } from "./pages/Services";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
export function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
