"use client";

/**
 * Button.tsx
 * Bouton CTA réutilisable avec micro-animations discrètes (hover, tap).
 * Accessible : focus visible, min 48px de zone tactile, respect de prefers-reduced-motion.
 */

import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  pulse?: boolean;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-brand text-white",
    "hover:bg-brand-dark",
    "shadow-md hover:shadow-lg",
    "transition-colors duration-200",
  ].join(" "),
  secondary: [
    "bg-white text-brand border-2 border-brand",
    "hover:bg-brand-light/40",
    "shadow-sm hover:shadow",
    "transition-colors duration-200",
  ].join(" "),
  ghost: [
    "bg-transparent text-brand underline underline-offset-4",
    "hover:text-brand-dark",
    "transition-colors duration-200",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[44px]",
  md: "px-6 py-3.5 text-base min-h-[48px]",
  lg: "px-8 py-4 text-base sm:text-lg min-h-[54px]",
};

const baseStyles = [
  "relative inline-flex items-center justify-center gap-2",
  "rounded-xl font-bold tracking-tight",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
  "cursor-pointer select-none",
].join(" ");

export function Button({
  variant = "primary",
  size = "md",
  className,
  pulse = false,
  children,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.015 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.15 },
      };

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;

    if (external) {
      return (
        <motion.a
          {...motionProps}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...(rest as any)}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes} {...(rest as any)}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      className={classes}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
