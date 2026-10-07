/**
 * Container.tsx
 * Conteneur responsive centré — largeur max et padding horizontal cohérents.
 * Utilisation : envelopper le contenu de chaque section.
 */

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** "default" = 1280px | "narrow" = 720px | "wide" = 100% */
  width?: "default" | "narrow" | "wide";
}

const widthStyles = {
  default: "max-w-screen-xl",
  narrow: "max-w-2xl",
  wide: "max-w-none",
} as const;

export function Container({ children, className, width = "default" }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthStyles[width], className)}>
      {children}
    </div>
  );
}
