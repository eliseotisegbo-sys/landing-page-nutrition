/**
 * utils.ts
 * Utilitaires partagés — merging de classes Tailwind.
 * Alternative légère à clsx/tailwind-merge pour ce projet simple.
 */

/**
 * Fusionne des classes CSS en filtrant les valeurs falsy.
 * Usage : cn("base-class", condition && "conditional-class", props.className)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
