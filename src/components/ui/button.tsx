// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
//         outline:
//           "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
//         ghost:
//           "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2 has-[>svg]:px-3",
//         sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
//         lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
//         icon: "size-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// function Button({
//   className,
//   variant,
//   size,
//   asChild = false,
//   ...props
// }: React.ComponentProps<"button"> &
//   VariantProps<typeof buttonVariants> & {
//     asChild?: boolean
//   }) {
//   const Comp = asChild ? Slot : "button"

//   return (
//     <Comp
//       data-slot="button"
//       className={cn(buttonVariants({ variant, size, className }))}
//       {...props}
//     />
//   )
// }

// export { Button, buttonVariants }


import * as Headless from '@headlessui/react';
import { clsx } from 'clsx';
import { Link } from './link';

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-5 py-[calc(theme(spacing.3)-1px)]',
    'rounded-full border border-transparent bg-neutral-950 shadow',
    'text-sm font-semibold whitespace-nowrap text-white',
    'data-[disabled]:bg-neutral-950 data-[disabled]:opacity-40 data-[hover]:bg-neutral-800'
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-5 py-[calc(theme(spacing.3)-1px)]',
    'rounded-full border border-transparent bg-white/15 ring-1 shadow ring-neutral-950/15',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-sm font-semibold whitespace-nowrap text-neutral-950',
    'data-[disabled]:bg-white/15 data-[disabled]:opacity-40 data-[hover]:bg-white/20'
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(theme(spacing.[1.5])-1px)]',
    'rounded-lg border border-transparent ring-1 shadow ring-black/10',
    'text-sm font-semibold whitespace-nowrap text-neutral-950',
    'data-[disabled]:bg-transparent data-[disabled]:opacity-40 data-[hover]:bg-neutral-50'
  ),
};

type ButtonProps = {
  variant?: keyof typeof variants;
} & (React.ComponentPropsWithoutRef<typeof Link> | (Headless.ButtonProps & { href?: undefined }));

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(className, variants[variant]);

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />;
  }

  return <Link {...props} className={className} />;
}
