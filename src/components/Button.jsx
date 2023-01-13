import clsx from "clsx";

export default (props) => {
	return (
		<button 
			className={clsx("py-3 px-4 bg-emerald-500 text-white rounded font-semibold text-sm w-full outline-none transition-colors hover:bg-emerald-400 focus:ring-2 ring-white",
			props.className != null ? props.children : "")}
			{...props}>
			{props.children}
		</button>
	);
};