"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Cursor.module.css";

export default function AdvancedCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsClient(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => {
      setIsPointer(true);
    };

    const handleMouseLeave = () => {
      setIsPointer(false);
    };

    const handleMouseEnterDocument = () => {
      setIsHidden(false);
      document.body.classList.add("cursor-enabled");
    };

    const handleMouseLeaveDocument = () => {
      setIsHidden(true);
      document.body.classList.remove("cursor-enabled");
    };

    const handleMobileCheck = () => {
      if (window.innerWidth <= 768) {
        document.body.classList.add(styles.cursorDisabled);
      } else {
        document.body.classList.remove(styles.cursorDisabled);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnterDocument);
    document.addEventListener("mouseleave", handleMouseLeaveDocument);
    window.addEventListener("resize", handleMobileCheck);

    // Initial mobile check
    handleMobileCheck();

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnterDocument);
      document.removeEventListener("mouseleave", handleMouseLeaveDocument);
      window.removeEventListener("resize", handleMobileCheck);
      document.body.classList.remove("cursor-enabled");
      document.body.classList.remove(styles.cursorDisabled);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  // Don't render cursor during SSR
  if (!isClient) {
    return null;
  }

  return (
    <>
      <motion.div
        className={`${styles.cursor} ${isPointer ? styles.pointer : ""} ${
          isHidden ? styles.hidden : ""
        }`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
      <motion.div
        className={`${styles.cursorFollower} ${
          isPointer ? styles.pointer : ""
        } ${isHidden ? styles.hidden : ""}`}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
    </>
  );
}
