import clsx from "clsx";

export default (props) => {
    return (
			<h1 
				className={clsx("text-gray-800 font-bold font-sans", {
					"text-lg": props.size === "sm",
					"text-xl": props.size === "md" || props.size == null,
					"text-2xl": props.size === "lg"
				}, props?.className)}>
				{props.children}
			</h1>
    );
};