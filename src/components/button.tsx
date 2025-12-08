import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: "light" | "dark" | "icon";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
};

export default function Button({ color = "light", size = "md", outline = false, ...props }: ButtonProps) {
  const styles = {
    base: "flex-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-800",
    light: "bg-zinc-50 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800",
    dark: "bg-zinc-950 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-100",
    icon: "bg-zinc-50 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800",
    outline: {
      light: "bg-zinc-50 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800",
      dark: "bg-zinc-950 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-100",
      icon: "bg-zinc-50 text-zinc-950 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-800",
    }
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  const classes = cn(
    styles.base,
    outline ? styles.outline[color] : styles[color],
    sizes[size],
    props.className
  );

  // if (props)
};
