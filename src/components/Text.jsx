import clsx from "clsx";

export default (props) => {
  return (
		<span className={clsx("mt-1 font-sans", {
			"text-xs": props.size === "sm",
			"text-sm": props.size === "md" || props.size == null,
			"text-md": props.size === "lg",
			"text-gray-400": props.color === "gray-light" || props.color == null,
			"text-gray-800": props.color === "gray-dark"
		},
		props?.className)}>
			{props.children}
		</span>
	);
};