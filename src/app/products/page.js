'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react'
import styles from './page.module.css'

const featuredProducts = [
  {
    id: 1,
    name: "Premium Winter Jacket",
    price: "$129.99",
    originalPrice: "$199.99",
    discount: "35% OFF",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    colors: ["#000000", "#8B4513", "#2F4F4F"],
    sizes: ["S", "M", "L", "XL"],
    description: "Stay warm and stylish with our premium winter jacket featuring waterproof technology and premium insulation."
  },
  {
    id: 2,
    name: "Designer Leather Bag",
    price: "$89.99",
    originalPrice: "$149.99",
    discount: "40% OFF",
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    colors: ["#8B4513", "#000000", "#654321"],
    sizes: ["One Size"],
    description: "Handcrafted genuine leather bag with multiple compartments and premium finishing."
  },
  {
    id: 3,
    name: "Smart Watch Pro",
    price: "$199.99",
    originalPrice: "$299.99",
    discount: "33% OFF",
    rating: 4.7,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    colors: ["#000000", "#2F4F4F", "#800000"],
    sizes: ["S", "M", "L"],
    description: "Advanced smartwatch with health monitoring, GPS, and 7-day battery life."
  }
]

const categories = [
  {
    name: "Men's Fashion",
    count: "150+ Items",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Women's Collection",
    count: "200+ Items",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Accessories",
    count: "80+ Items",
    image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Footwear",
    count: "120+ Items",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
]

export default function Products() {
  return (
    <div className={styles.container}>
      {/* Hero Section with Background Image */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroText}
          >
            <h1>Discover Premium Products</h1>
            <p>Explore our exclusive collection of high-quality fashion, accessories, and lifestyle products</p>
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop New Arrivals
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className={styles.featuredSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Featured Products</h2>
            <p>Handpicked items with exclusive discounts</p>
          </motion.div>

          <div className={styles.productsGrid}>
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={styles.productCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.productImage}>
                  <img src={product.image} alt={product.name} />
                  <div className={styles.productBadge}>{product.discount}</div>
                  <button className={styles.wishlistButton}>
                    <Heart size={20} />
                  </button>
                </div>

                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  
                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < Math.floor(product.rating) ? "#fbbf24" : "none"}
                          color="#fbbf24"
                        />
                      ))}
                    </div>
                    <span>({product.reviews} reviews)</span>
                  </div>

                  <div className={styles.priceSection}>
                    <span className={styles.currentPrice}>{product.price}</span>
                    <span className={styles.originalPrice}>{product.originalPrice}</span>
                  </div>

                  <div className={styles.colors}>
                    {product.colors.map((color, i) => (
                      <div
                        key={i}
                        className={styles.colorOption}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <div className={styles.sizes}>
                    {product.sizes.map((size, i) => (
                      <span key={i} className={styles.sizeOption}>
                        {size}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    className={styles.addToCart}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Shop by Category</h2>
            <p>Find exactly what you're looking for</p>
          </motion.div>

          <div className={styles.categoriesGrid}>
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className={styles.categoryCard}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div 
                  className={styles.categoryImage}
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <div className={styles.categoryContent}>
                  <h3>{category.name}</h3>
                  <p>{category.count}</p>
                  <button className={styles.exploreButton}>Explore</button>
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
              <Truck size={40} />
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
              <Shield size={40} />
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
              <RotateCcw size={40} />
              <h3>Easy Returns</h3>
              <p>30-day return policy</p>
            </motion.div>

            <motion.div
              className={styles.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Star size={40} />
              <h3>Premium Quality</h3>
              <p>Curated selection of premium products</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}