import clsx from "clsx";
import Heading from "./Heading";
import Text from "./Text";

export default (props) => {
    return (
        <div className={clsx("bg-white shadow-xl rounded-md", props?.className)}>
            <div className="w-full h-[5%] p-4">
								<Text className="uppercase font-bold text-gray-500">
									{props.title}
								</Text>
            </div>

            <div className="w-full h-[80%] flex justify-end items-end px-4">
								<Heading size="lg">
									{props.value}
								</Heading>
            </div>
        </div>
    );
}