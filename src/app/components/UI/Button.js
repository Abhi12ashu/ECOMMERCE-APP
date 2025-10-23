"use client";

import { motion } from "framer-motion";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  loading = false,
  icon: Icon,
  ...props
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[size]} ${
    disabled ? styles.disabled : ""
  } ${loading ? styles.loading : ""}`;

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
    disabled: {
      scale: 1,
      opacity: 0.6,
    },
  };

  return (
    <motion.button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || loading}
      variants={buttonVariants}
      whileHover={!disabled && !loading ? "hover" : "disabled"}
      whileTap={!disabled && !loading ? "tap" : "disabled"}
      {...props}
    >
      {loading && (
        <motion.div
          className={styles.spinner}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}

      {Icon && !loading && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Icon size={size === "small" ? 16 : 20} />
        </motion.div>
      )}

      <span className={styles.text}>{children}</span>
    </motion.button>
  );
}

// Specialized Button Components
export function PrimaryButton(props) {
  return <Button variant="primary" {...props} />;
}

export function SecondaryButton(props) {
  return <Button variant="secondary" {...props} />;
}

export function GradientButton(props) {
  return <Button variant="gradient" {...props} />;
}

export function OutlineButton(props) {
  return <Button variant="outline" {...props} />;
}
