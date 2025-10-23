"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Shield,
  Truck,
  Clock,
  Users,
  Award,
} from "lucide-react";
import styles from "./Hero.module.css";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "200+", label: "Designer Brands", icon: Award },
    { number: "2Y+", label: "Warranty", icon: Shield },
    { number: "24/7", label: "Support", icon: Clock },
  ];

  return (
    <section className={styles.hero}>
      {/* Premium Background with Fashion Image */}
      <div className={styles.heroBackground} />

      <motion.div
        className={styles.heroContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className={styles.heroContent}>
          <motion.h1 className={styles.heroTitle} variants={itemVariants}>
            Elevate Your
            <span className={styles.accentText}> Style</span>
            <br />
            With Premium Fashion
          </motion.h1>

          <motion.p className={styles.heroSubtitle} variants={itemVariants}>
            Discover curated collections that blend timeless elegance with
            modern sophistication. Experience fashion that tells your story.
          </motion.p>

          <motion.div className={styles.heroActions} variants={itemVariants}>
            <motion.button
              className={styles.primaryButton}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Collection
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              className={styles.secondaryButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={18} />
              Watch Story
            </motion.button>
          </motion.div>

          {/* Premium Features */}
          <motion.div
            className={styles.premiumFeatures}
            variants={itemVariants}
          >
            <div className={styles.featureItem}>
              <Shield size={18} />
              <span>Secure Payment</span>
            </div>
            <div className={styles.featureItem}>
              <Truck size={18} />
              <span>Free Shipping</span>
            </div>
            <div className={styles.featureItem}>
              <Star size={18} />
              <span>Premium Quality</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div className={styles.heroImage} variants={itemVariants}>
          <div className={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Premium Fashion Collection"
              className={styles.mainImage}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className={styles.statsSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={styles.statCard}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles.statIcon}>
              <stat.icon size={20} />
            </div>
            <motion.span
              className={styles.statNumber}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
            >
              {stat.number}
            </motion.span>
            <span className={styles.statLabel}>{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
