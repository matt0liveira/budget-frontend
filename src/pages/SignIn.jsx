import Heading from "../components/Heading";
import Text from "../components/Text";

export default () => {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-50">

			<form className="flex flex-col gap-4 items-stretch w-full max-w-md bg-white p-6 shadow-2xl rounded-md">
				<header className="flex flex-col items-center">
					<Heading size="lg">My Budget</Heading>

					<Text>Faça login e comece a usar</Text>
				</header>

				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Endereço de e-mail</Text>

					<input type="email" name="email" placeholder="Digite seu e-mail" className="h-12 py-4 px-3 border-solid border border-gray-300 rounded outline-none placeholder:text-gray-400 focus-within:ring-2 ring-emerald-300 text-xs text-gray-800" />
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Sua senha</Text>

					<input type="password" name="password" placeholder="***********" className="h-12 py-4 px-3 border-solid border border-gray-300 rounded outline-none placeholder:text-gray-400 focus-within:ring-2 ring-emerald-300 text-xs text-gray-800" />
				</label>

				<button className="py-3 px-4 bg-emerald-500 text-white rounded font-semibold text-sm w-full outline-none transition-colors hover:bg-emerald-400 focus:ring-2 ring-white">Entrar</button>

				<footer className="flex flex-col items-center">
					<a href="" className="text-sm text-gray-400 underline hover:text-gray-500">Não possui conta? Crie uma agora</a>
				</footer>
			</form>
		</div>
	);
};