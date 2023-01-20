import React, { useRef } from "react";

function InputRoot(props) {
	return (
		<div
			className="h-12 flex items-center gap-3 py-4 px-3 border-solid border bg-gray-100 border-gray-300 rounded outline-none placeholder:text-gray-400 focus-within:ring-2 ring-emerald-300">
			{props.children}
		</div>
	);
}

InputRoot.displayName = "Input.Root";

function InputIcon(props) {
	return <span className="w-6 h-6 text-gray-400">{props.children}</span>;
}

InputIcon.displayName = "Input.Icon";

const InputInput = React.forwardRef(({props, ...rest}, ref) => {
	return (
		<input
			className="bg-transparent flex-1 text-xs placeholder:text-gray-400 outline-none"
			{...props}
			{...rest}
			ref={ref}
		/>
	);
});

InputInput.displayName = "Input.Input";

export const Input = {
	Root: InputRoot,
	Input: InputInput,
	Icon: InputIcon
};