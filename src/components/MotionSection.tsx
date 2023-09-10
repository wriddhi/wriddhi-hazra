"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type MotionSectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  override?: boolean;
};

const MotionSection = ({
  id,
  children,
  className,
  delay,
  override=false,
}: MotionSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section id={id ?? ""} ref={ref}>
      <motion.div
        className={className ?? ""}
        variants={{
          hidden: { opacity: 0, translateY: 100 },
          visible: { opacity: 1, translateY: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: !isInView ?  delay :  (override ? delay : 0)}}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default MotionSection;
