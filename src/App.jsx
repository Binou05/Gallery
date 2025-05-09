// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GalleryHuile from "./pages/GalleryHuile";
import GalleryEncre from "./pages/GalleryEncre";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tarifs from "./pages/Tarifs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* Galerie devient un layout à 3 sous‐routes */}
        <Route path="galerie">
          <Route index element={<Navigate to="huile" replace />} />
          <Route path="huile" element={<GalleryHuile />} />
          <Route path="encre" element={<GalleryEncre />} />
          <Route path="tarifs" element={<Tarifs />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
