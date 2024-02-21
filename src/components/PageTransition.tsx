'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageTransition({ children, className }: IProps) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
