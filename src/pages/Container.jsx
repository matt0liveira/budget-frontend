	import Header from "../components/Header";
	import Sidebar from "../components/Sidebar";
	import Heading from "../components/Heading";

	export default (props) => {
		return (
			<div className="w-screen min-h-screen bg-gray-50">
				<Header />
				<Sidebar />

				<main className="w-[96vw] h-auto mt-14 ml-12 p-10">
					<header className="w-full pb-4">
						<Heading>{props.titlePage}</Heading>
					</header>

					{props.children}
				</main>
			</div>
		);
	}