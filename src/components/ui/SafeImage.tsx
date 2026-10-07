"use client";

/**
 * SafeImage.tsx
 * Wrapper autour de next/image avec gestion des images absentes.
 * Si l'image ne charge pas → affiche un placeholder neutre.
 * Ne jamais utiliser une URL distante en fallback.
 */

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ImageAsset } from "@/lib/images";

interface SafeImageProps extends ImageAsset {
  className?: string;
  /** Taille dans le layout responsive — ex. "(max-width: 768px) 100vw, 50vw" */
  sizes?: string;
  fill?: boolean;
  objectFit?: "cover" | "contain" | "fill";
}

export function SafeImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  sizes,
  fill = false,
  objectFit = "cover",
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // Placeholder neutre — aucune image distante
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-neutral-100 text-neutral-400 text-xs",
          fill ? "absolute inset-0" : "",
          className
        )}
        style={!fill ? { width, height } : undefined}
        aria-label={alt}
        role="img"
      >
        <span className="sr-only">{alt}</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", className)}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={cn(
        objectFit === "cover" ? "object-cover" : objectFit === "contain" ? "object-contain" : "object-fill",
        className
      )}
      onError={() => setHasError(true)}
    />
  );
}
