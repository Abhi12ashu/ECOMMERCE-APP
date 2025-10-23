"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Search, Menu, User } from "lucide-react";
import styles from "./Header.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PremiumHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const iconVariants = {
    hover: { scale: 1.1, rotate: 5 },
    tap: { scale: 0.9 },
  };

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.headerContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink}>
          <motion.div
            className={styles.logo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.logoText}>StyleCraft</span>
          </motion.div>
        </Link>

        {/* Navigation */}
        <nav className={styles.nav}>
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.path}
              className={styles.navLinkWrapper}
            >
              <motion.div
                className={`${styles.navLink} ${
                  isActive(item.path) ? styles.active : ""
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  color: "var(--primary-color)",
                }}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <motion.button
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className={styles.iconButton}
          >
            <Search size={20} />
          </motion.button>

          <motion.button
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className={styles.iconButton}
          >
            <User size={20} />
          </motion.button>

          <motion.button
            variants={iconVariants}
            whileHover="hover"
            whileTap="tap"
            className={styles.cartButton}
          >
            <ShoppingBag size={20} />
            <span className={styles.cartBadge}>3</span>
          </motion.button>

          <motion.button
            className={styles.menuButton}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={styles.mobileMenu}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={styles.mobileNavLinkWrapper}
          >
            <div
              className={`${styles.mobileNavLink} ${
                isActive(item.path) ? styles.active : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </motion.div>
    </motion.header>
  );
}
