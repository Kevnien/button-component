import { MdOutlineStarBorder } from "react-icons/md";

interface ButtonProps {
  textContent?: string;
  size?: Size;
  color?: Color;
  iconSrc?: string;
  iconPlacement?: IconPlacement;
}
type Size = "2x-large" | "medium" | "large" | "x-large" | "icon-only";
type Color = "blue" | "red" | "white" | "blue-clear" | "black";
type IconPlacement = "left" | "right" | "both";
const blueStyles =
  "text-white bg-indigo-700 hover:bg-indigo-800 hover:text-neutral-50";
const whiteStyles =
  "text-neutral-900 bg-white border-solid border-neutral-200 border-1 shadow-sm hover:text-neutral-950 hover:bg-neutral-50";
const blueClearStyles = "text-indigo-700 hover:text-indigo-800 hover:shadow-sm";
const redStyles =
  "text-white bg-red-600 hover:text-neutral-50 hover:bg-red-700";
const blackStyles = "hover:shadow-sm";
const mediumStyles = "text-base/4";
const largeStyles = "text-lg/5";
const xLargeStyles = "text-lg/5 p-5";
const xxLargeStyles = "text-xl/6 p-6";

export default function Button({
  textContent,
  size = "medium",
  color = "blue",
  iconSrc,
  iconPlacement = iconSrc ? "left" : undefined,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center rounded-sm font-medium m-4 box-border w-fit gap-3 p-4 focus:shadow-lg ${
        size === "large" && largeStyles
      } ${size === "medium" && mediumStyles} ${
        size === "x-large" && xLargeStyles
      } ${size === "2x-large" && xxLargeStyles} ${
        color === "blue" && blueStyles
      } ${color === "white" && whiteStyles} ${
        color === "blue-clear" && blueClearStyles
      } ${color === "red" && redStyles} ${color === "black" && blackStyles}`}
      tabIndex={0}
    >
      {iconPlacement === "left" && (
        <MdOutlineStarBorder
          className={`flex items-center ${
            size === "large" || (size === "x-large" && "size-5")
          }`}
        />
      )}
      {!(size === "icon-only") && <span>{textContent}</span>}
      {(size === "icon-only" || iconPlacement === "right") && (
        <MdOutlineStarBorder
          className={`flex items-center ${
            size === "large" ||
            size === "x-large" ||
            (size === "icon-only" && "size-5")
          }`}
        />
      )}
    </button>
  );
}
