"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  Shield,
  Clock,
  Star,
  Truck,
  Heart,
  Target,
} from "lucide-react";
import styles from "./page.module.css";

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Passionate about bringing premium fashion to everyone",
  },
  {
    name: "Michael Chen",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Creative visionary with 10+ years in fashion industry",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    description: "Expert in brand strategy and customer engagement",
  },
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our top priority. We're committed to providing exceptional service and quality products.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every product is carefully selected and tested to meet our high standards of quality and durability.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We continuously evolve to bring you the latest trends and innovative fashion solutions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a community of fashion enthusiasts who share our passion for style and quality.",
  },
];

export default function About() {
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
            <h1>About StyleCraft</h1>
            <p>Where fashion meets craftsmanship and innovation</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyContent}>
            <motion.div
              className={styles.storyText}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                StyleCraft was born from a simple yet powerful vision: to make
                premium fashion accessible to everyone without compromising on
                quality or style. Founded in 2018, we've grown from a small
                boutique to a trusted name in the fashion industry.
              </p>
              <p>
                Our journey began with a passion for craftsmanship and a belief
                that everyone deserves to express their unique style through
                clothing that not only looks exceptional but feels incredible to
                wear.
              </p>
              <p>
                Today, we continue to uphold our founding principles while
                embracing innovation and sustainability in everything we do.
              </p>
            </motion.div>

            <motion.div
              className={styles.storyImage}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Our Impact</h2>
            <p>Numbers that speak to our commitment and growth</p>
          </motion.div>

          <div className={styles.statsGrid}>
            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.statIcon}>
                <Users size={24} />
              </div>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.statIcon}>
                <Award size={24} />
              </div>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>Designer Brands</span>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.statIcon}>
                <Shield size={24} />
              </div>
              <span className={styles.statNumber}>2Y+</span>
              <span className={styles.statLabel}>Warranty</span>
            </motion.div>

            <motion.div
              className={styles.statCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.statIcon}>
                <Clock size={24} />
              </div>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Support</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.valueIcon}>
                  <value.icon size={32} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className={styles.teamSection}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.sectionHeader}
          >
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind StyleCraft</p>
          </motion.div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.memberImage}>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className={styles.memberInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.memberRole}>{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              <Truck size={32} />
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
              <Shield size={32} />
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
              <Star size={32} />
              <h3>Premium Quality</h3>
              <p>Curated selection of premium products</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
