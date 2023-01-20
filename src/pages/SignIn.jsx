import { Envelope, Eye, EyeClosed, Lock } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { Input } from "../components/Input";
import Text from "../components/Text";

export default () => {
	const [	typeInputPassword, setTypeInputPassword] = useState("password")

	function handleToggleViewPassword() {
		if(typeInputPassword === "password")
			setTypeInputPassword("text")
		else
			setTypeInputPassword("password")
	}

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center bg-white">

			<form className="flex flex-col gap-4 items-stretch w-full max-w-md p-6 rounded-md">
				<header className="flex flex-col items-center">
					<Heading size="lg">Budget</Heading>

					<Text>Faça login e comece a usar</Text>
				</header>

				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Endereço de e-mail</Text>

					<Input.Root>
						<Input.Icon>
							<Envelope />
						</Input.Icon>

						<Input.Input type="email" name="email" placeholder="Digite seu e-mail" />
					</Input.Root>
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Sua senha</Text>

					<Input.Root>
						<Input.Icon>
							<Lock />
						</Input.Icon>

						<Input.Input type={typeInputPassword} name="password" placeholder="***********" />

						<button type="button" onClick={handleToggleViewPassword}>
							<Input.Icon>
								{typeInputPassword === "password" ? <Eye /> : <EyeClosed />}
							</Input.Icon>
						</button>
					</Input.Root>
				</label>

				<Button type="submit">Entrar na plataforma</Button>

				<footer className="flex flex-col items-center">
					<Text className="my-2 underline hover:text-gray-500" size="md">
						Não possui uma conta?
						<Link to="/signup"> Crie uma conta agora</Link>
					</Text>
				</footer>
			</form>
		</div>
	);
};