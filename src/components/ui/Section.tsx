/**
 * Section.tsx
 * Section de page avec espacement vertical système.
 * Chaque section a une fonction — pas de section décorative sans rôle.
 */

import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Identifiant HTML pour la navigation intra-page */
  id?: string;
  /** Fond de section */
  bg?: "white" | "cream" | "dark" | "brand" | "transparent";
  /** Espacement vertical */
  spacing?: "sm" | "md" | "lg" | "xl";
}

const bgStyles = {
  white: "bg-white",
  cream: "bg-cream",
  dark: "bg-neutral-900 text-white",
  brand: "bg-brand text-white",
  transparent: "bg-transparent",
} as const;

const spacingStyles = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
} as const;

export function Section({
  children,
  className,
  id,
  bg = "white",
  spacing = "lg",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(bgStyles[bg], spacingStyles[spacing], className)}
    >
      {children}
    </section>
  );
}
