import React from "react";
import { motion } from "framer-motion";

const Tilt = ({ children }) => {
  const tiltEffect = {
    hover: {
      rotateX: [-10, 0, 10],
      rotateY: [-10, 0, 10],
      scale: 1.05,
    },
  };

  return (
    <motion.div
      initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
      whileHover="hover"
      variants={tiltEffect}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        perspective: "1000px",
        display: "inline-block",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Tilt;
