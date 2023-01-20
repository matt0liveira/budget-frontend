import { Money } from "phosphor-react";
import Button from "./Button";
import Text from "./Text";

export default () => {
	return (
		<header className="w-[96vw] h-14 bg-gray-50 flex flex-row justify-end items-center px-6 py-2 fixed right-0 top-0 shadow-sm">
			<Button className="w-fit h-8 flex flex-row items-center rounded-full mx-4">
				<Money size={20} />

				<Text className="text-gray-50 px-4 mt-0" size="sm">
					Nova transação
				</Text>
			</Button>

			<div className="w-10 h-10">
				<div className="w-full">
					<img src="/avatar-default.jpg" alt="avatar-default" className="rounded-full" />
				</div>
			</div>

		</header>
	);
};