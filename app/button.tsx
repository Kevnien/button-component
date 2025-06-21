interface ButtonProps {
  textContent?: string;
  size?: Size;
  color?: Color;
}
type Size = "small" | "medium" | "large" | "x-large" | "star";
type Color = "blue" | "red" | "white" | "blue-clear" | "black";
const blueStyles = "text-white bg-indigo-700";
const smallStyles = "text-sm p-3";
const mediumStyles = "text-md p-4";

export default function Button({
  textContent = "Button CTA",
  size = "medium",
  color = "blue",
}: ButtonProps) {
  return (
    <button
      className={`rounded-sm font-medium m-4 ${
        size === "small" && smallStyles
      } ${size === "medium" && mediumStyles} ${color === "blue" && blueStyles}`}
    >
      {textContent}
    </button>
  );
}
