"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Play, Zap } from "lucide-react";
import styles from "./ProductGrid.module.css";

export default function ProductCard({ product, index }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getIcon = (title) => {
    if (title.includes("Sound") || title.includes("Play")) return Play;
    if (title.includes("Brightness") || title.includes("Discount")) return Zap;
    return ShoppingCart;
  };

  const IconComponent = getIcon(product.title);

  return (
    <motion.div
      className={styles.productCard}
      variants={cardVariants}
      whileHover={{
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
    >
      {/* Discount Badge */}
      {product.discount && (
        <div className={styles.discountBadge}>{product.discount}</div>
      )}

      {/* Tags */}
      <div className={styles.tags}>
        {product.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      {/* 3D Card Content */}
      <div className={styles.cardContent}>
        {/* Product Icon/Image Area */}
        <div className={styles.imageContainer}>
          <motion.div
            className={styles.productIcon}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <IconComponent size={32} />
          </motion.div>
          <div className={styles.glowEffect} />
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <h3 className={styles.productTitle}>{product.title}</h3>
          {product.subtitle && (
            <p className={styles.productSubtitle}>{product.subtitle}</p>
          )}
          <p className={styles.productDescription}>{product.description}</p>
        </div>

        {/* Price Section */}
        <div className={styles.priceSection}>
          <div className={styles.prices}>
            <span className={styles.currentPrice}>{product.price}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                {product.originalPrice}
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          className={styles.actionButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {product.buttonText}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <IconComponent size={16} />
          </motion.div>
        </motion.button>
      </div>

      {/* 3D Border Effect */}
      <div className={styles.cardBorder} />
    </motion.div>
  );
}
