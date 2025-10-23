"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const categories = [
  {
    name: "Men's Fashion",
    count: "150+ Items",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Stylish clothing for the modern man",
  },
  {
    name: "Women's Fashion",
    count: "200+ Items",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Elegant and trendy women's collection",
  },
  {
    name: "Accessories",
    count: "80+ Items",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Complete your look with our accessories",
  },
  {
    name: "Footwear",
    count: "120+ Items",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Comfortable and stylish footwear",
  },
  {
    name: "Sports Wear",
    count: "90+ Items",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Performance and style combined",
  },
  {
    name: "Luxury Collection",
    count: "50+ Items",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Premium luxury fashion items",
  },
];

export default function Categories() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <h1>Shop by Category</h1>
            <p>Explore our wide range of premium fashion categories</p>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Products
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>All Categories</h2>
            <p>
              Find exactly what you're looking for in our curated collections
            </p>
          </motion.div>

          <div className={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.categoryImageContainer}>
                  <div
                    className={styles.categoryImage}
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.itemCount}>{category.count}</div>
                </div>

                <div className={styles.categoryContent}>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                  <motion.button
                    className={styles.exploreButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Shop Now
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <motion.div
              className={styles.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Free Shipping</h3>
              <p>Free delivery on orders over $50</p>
            </motion.div>

            <motion.div
              className={styles.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Secure Payment</h3>
              <p>100% secure payment processing</p>
            </motion.div>

            <motion.div
              className={styles.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
