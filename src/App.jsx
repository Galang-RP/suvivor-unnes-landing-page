import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Navbar from "./components/Navbar.jsx";
import SectionNavigation from "./components/SectionNavigation.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="page-scroll-progress" aria-hidden="true" />
      <Navbar />
      <SectionNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
