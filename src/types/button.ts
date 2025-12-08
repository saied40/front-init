export default interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
};
