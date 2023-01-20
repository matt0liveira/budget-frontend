import clsx from "clsx";

export default (props) => {
  return (
		<span className={clsx("font-sans", {
			"text-xs": props.size === "sm",
			"text-sm": props.size === "md" || props.size == null,
			"text-md": props.size === "lg"
		},
		props?.className)}>
			{props.children}
		</span>
	);
};