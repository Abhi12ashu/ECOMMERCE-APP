"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Star, Heart } from "lucide-react";
import styles from "./ProductGrid.module.css";

const products = [
  {
    id: 1,
    title: "Premium Headphones",
    subtitle: "Just Play Sound",
    discount: "30% OFF",
    description:
      "Experience crystal clear audio with our premium wireless headphones featuring noise cancellation.",
    tags: ["NEW", "HOT"],
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    price: "$99.99",
    originalPrice: "$142.99",
    buttonText: "Shop Now",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: "Designer Watch",
    subtitle: "NEW COLLECTION",
    description:
      "Elegant timepiece with premium materials and precision movement. Perfect for any occasion.",
    tags: ["NEW ARRIVAL"],
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    price: "$129.99",
    originalPrice: "$185.99",
    buttonText: "Explore",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    title: "Camera Bundle",
    description:
      "Professional photography kit with lens, tripod, and accessories. Capture your best moments.",
    tags: ["SALE"],
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    price: "$79.99",
    originalPrice: "$114.99",
    buttonText: "Get Deal",
    rating: 4.7,
    reviews: 256,
  },
  {
    id: 4,
    title: "Smartphone Pro",
    subtitle: "Latest Technology",
    description:
      "Next-generation smartphone with advanced camera system and all-day battery life.",
    tags: ["FEATURED"],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    price: "$149.99",
    originalPrice: "$199.99",
    buttonText: "Discover",
    rating: 4.6,
    reviews: 342,
  },
  {
    id: 5,
    title: "Gaming Console",
    description:
      "Ultimate gaming experience with 4K resolution and immersive gameplay features.",
    tags: ["GAMING"],
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    price: "$59.99",
    originalPrice: "$89.99",
    buttonText: "Play Now",
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 6,
    title: "Laptop Pro",
    description:
      "Powerful laptop for work and creativity with stunning display and fast performance.",
    tags: ["BUSINESS"],
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    price: "$199.99",
    originalPrice: "$249.99",
    buttonText: "Learn More",
    rating: 4.9,
    reviews: 203,
  },
];

export default function ProductGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className={styles.productGridSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Featured Products</h2>
          <p className={styles.sectionSubtitle}>
            Discover our curated collection of premium products with exclusive
            discounts
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.productCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              {/* Product Image */}
              <div className={styles.productImage}>
                <img src={product.image} alt={product.title} />
                <div className={styles.imageOverlay} />

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

                {/* Wishlist Button */}
                <button className={styles.wishlistButton}>
                  <Heart size={18} />
                </button>
              </div>

              {/* Product Info */}
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                {product.subtitle && (
                  <p className={styles.productSubtitle}>{product.subtitle}</p>
                )}
                <p className={styles.productDescription}>
                  {product.description}
                </p>

                {/* Rating */}
                <div className={styles.rating}>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={
                          i < Math.floor(product.rating) ? "#fbbf24" : "none"
                        }
                        color="#fbbf24"
                      />
                    ))}
                  </div>
                  <span className={styles.reviewCount}>
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className={styles.priceSection}>
                  <span className={styles.currentPrice}>{product.price}</span>
                  {product.originalPrice && (
                    <span className={styles.originalPrice}>
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <motion.button
                  className={styles.actionButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart size={16} />
                  {product.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
