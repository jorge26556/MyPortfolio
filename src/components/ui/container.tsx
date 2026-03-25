import * as React from "react";
import { cn } from "@/lib/utils";

const containerMaxWidths = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
} as const;

type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  size?: keyof typeof containerMaxWidths;
  className?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends React.ElementType = "div">({
  as,
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as React.ElementType;

  return React.createElement(
    Component,
    {
      className: cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        containerMaxWidths[size],
        className
      ),
      ...props,
    },
    children
  );
}
