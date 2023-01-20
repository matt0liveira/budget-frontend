import { ChartPieSlice, List, Money, SquareHalf, User, X } from "phosphor-react";
import { useEffect } from "react";
import { useState } from "react";
import Text from "../Text";
import ItemMenu from "./ItemMenu";

export default () => {
	const [widthSidebar, setWidthSidebar] = useState("12");
	const [displayTextNav, setDisplayTextNav] = useState("hidden");
	const [logo, setLogo] = useState("B");

	useEffect(() => {
		console.log(widthSidebar);
	}, []);

	function handleToggleMenu() {
		if(widthSidebar == "12") {
			setWidthSidebar("72");
			setDisplayTextNav("");
			setLogo("Budget");
		} else {
			setWidthSidebar("12");
			setDisplayTextNav("hidden");
			setLogo("B");
		}
	}

	return (
		<div className={`w-${widthSidebar} h-screen bg-emerald-500 fixed left-0 top-0 flex flex-col justify-between whitespace-nowrap overflow-hidden transition-all z-50 shadow-2xl`}>
			<div className="w-full h-14 flex items-center justify-center">
				<button onClick={handleToggleMenu}>
					{
						widthSidebar == "12" ? <List size={24} color="#ffff" /> : <X size={24} color="#ffffff" />
					}
				</button>
			</div>

			<nav className="w-full flex flex-col justify-between items-center">
				<ItemMenu to="/#">
					<ChartPieSlice size={24} color="#ffffff" />
					<Text className={`text-white px-3 ${displayTextNav}`} size="sm">Dashboards</Text>
				</ItemMenu>

					<ItemMenu path="/transactions">
						<Money size={24} color="#ffffff" />
						<Text className={`text-white px-3 ${displayTextNav}`} size="sm">Transações</Text>
					</ItemMenu>

					<ItemMenu to="/#">
						<SquareHalf size={24} color="#ffffff" />
						<Text className={`text-white px-3 ${displayTextNav}`} size="sm">Categorias</Text>
					</ItemMenu>

					<ItemMenu>
						<User size={24} color="#ffff" />
						<Text className={`text-white px-3 ${displayTextNav}`} size="sm">Meu perfil</Text>
					</ItemMenu>
			</nav>

			<div className="w-ful h-14 flex justify-center items-center border-t-[1px]">
				<Text className="text-white font-bold" size="lg">{logo}</Text>
			</div>
		</div>
	);
}