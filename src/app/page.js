"use client";

import { motion } from "framer-motion";
import PremiumHeader from "./components/Header/PremiumHeader";
import HeroSection from "./components/Hero/HeroSection";
import ProductGrid from "./components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <PremiumHeader />
      <HeroSection />
      <ProductGrid />
    </motion.div>
  );
}
