import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

const fundeenButtonVariants = cva(
  "group inline-flex items-center justify-between w-fit whitespace-nowrap transition-all duration-500 font-stratos-medium uppercase border rounded-sm hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 overflow-hidden disabled:opacity-30 disabled:cursor-default",
  {
    variants: {
      variant: {
        primaryDark:
          "border-navy text-cream bg-navy shadow-md hover:bg-navy/90 hover:border-navy/90",
        colorFull:
          "border-terracotta text-cream bg-gradient-to-r from-terracotta to-golden shadow-md hover:from-terracotta-dark hover:to-terracotta hover:border-golden",
        secondary:
          "border-cream text-navy bg-cream shadow-md hover:bg-cream-dark hover:border-cream-dark",
        secondaryLight:
          "border-cream text-cream bg-transparent hover:bg-cream/20",
        secondaryDark:
          "border-navy text-navy bg-transparent hover:bg-navy/10",
      },
      size: {
        "2xl": "gap-8 text-2xl py-4 pr-5 pl-6",
        xl: "gap-8 text-xl py-4 px-5",
        l: "gap-8 text-lg py-4 px-5",
        m: "gap-6 text-base py-3 px-5",
        s: "gap-4 text-sm py-2 pr-3 pl-4",
      },
      responsive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        size: "2xl",
        responsive: true,
        className: "text-lg md:text-xl lg:text-2xl py-4 px-5 md:pr-5 md:pl-6",
      },
      {
        size: "xl",
        responsive: true,
        className: "text-base md:text-lg lg:text-xl py-4 px-5",
      },
      {
        size: "l",
        responsive: true,
        className: "text-base md:text-lg py-4 px-5",
      },
      {
        size: "m",
        responsive: true,
        className: "text-sm md:text-base py-3 px-5",
      },
    ],
    defaultVariants: {
      variant: "primaryDark",
      size: "m",
      responsive: true,
    },
  }
);

const iconVariants = cva("stroke-2 transition-transform duration-300", {
  variants: {
    variant: {
      primaryDark: "stroke-cream text-cream",
      colorFull: "stroke-cream text-cream",
      secondary: "stroke-navy text-navy",
      secondaryLight: "stroke-cream text-cream",
      secondaryDark: "stroke-navy text-navy",
    },
    size: {
      "2xl": "w-10 h-10",
      xl: "w-8 h-8",
      l: "w-7 h-7",
      m: "w-6 h-6",
      s: "w-5 h-5",
    },
    responsive: {
      true: "",
      false: "",
    },
    iconAnimate: {
      right: "group-hover:translate-x-1 group-disabled:translate-x-0",
      left: "group-hover:-translate-x-1 group-disabled:translate-x-0",
      topRight:
        "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-disabled:translate-x-0 group-disabled:translate-y-0",
      top: "group-hover:-translate-y-1 group-disabled:translate-y-0",
      bottom: "group-hover:translate-y-1 group-disabled:translate-y-0",
      none: "",
    },
  },
  compoundVariants: [
    {
      size: "2xl",
      responsive: true,
      className: "w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10",
    },
    {
      size: "xl",
      responsive: true,
      className: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8",
    },
  ],
  defaultVariants: {
    variant: "primaryDark",
    size: "m",
    responsive: true,
    iconAnimate: "right",
  },
});

export interface FundeenButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fundeenButtonVariants> {
  href?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconAnimate?: "right" | "left" | "topRight" | "top" | "bottom" | "none";
  asChild?: boolean;
}

const FundeenButton = React.forwardRef<HTMLButtonElement, FundeenButtonProps>(
  (
    {
      className,
      variant,
      size,
      responsive = true,
      icon: Icon,
      iconPosition = "right",
      iconAnimate = "right",
      href,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const buttonContent = (
      <>
        {Icon && iconPosition === "left" && (
          <div className="flex items-center border-r border-current/30 mr-4">
            <div className="mr-4 overflow-hidden">
              <Icon
                className={cn(
                  iconVariants({
                    variant,
                    size,
                    responsive,
                    iconAnimate: disabled ? "none" : iconAnimate,
                  })
                )}
              />
            </div>
          </div>
        )}
        <span className="w-full text-center px-2">{children}</span>
        {Icon && iconPosition === "right" && (
          <div className="flex items-center border-l border-current/30">
            <div className="ml-4 overflow-hidden">
              <Icon
                className={cn(
                  iconVariants({
                    variant,
                    size,
                    responsive,
                    iconAnimate: disabled ? "none" : iconAnimate,
                  })
                )}
              />
            </div>
          </div>
        )}
      </>
    );

    if (href && !disabled) {
      return (
        <a
          href={href}
          className={cn(
            fundeenButtonVariants({ variant, size, responsive, className })
          )}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <button
        className={cn(
          fundeenButtonVariants({ variant, size, responsive, className })
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

FundeenButton.displayName = "FundeenButton";

export { FundeenButton, fundeenButtonVariants };
