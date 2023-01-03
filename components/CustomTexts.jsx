'use client';

import { motion } from 'framer-motion';

import { textContainer, textVariant2 } from '../utils/motion';

// This is a component that is used in multiple places
// It is a text that is animated to look like it is being typed
/**
 * @param {string} title
 * @param {string} textStyles
 */
export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((char, index) => (
      <motion.span
        key={index}
        variants={textVariant2}
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))}
  </motion.p>
);

// This is a component that is used in multiple places
/**
 * @param {ReactFragment} title
 * @param {string} textStyles
 * @returns
 */
export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
