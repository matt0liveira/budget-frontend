import { Link } from "react-router-dom";

export default (props) => {
	return (
		<Link className="w-full h-16 box-border flex flex-row justify-evenly items-center font-sans font-bold hover:bg-emerald-400 transition-all" to={props.path}>
			{props.children}
		</Link>
	);
}