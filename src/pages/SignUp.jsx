import { Envelope, Eye, EyeClosed, Lock, User } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { Input } from "../components/Input";
// import Input from "../components/Input";
import Text from "../components/Text";

export default () => {
	const [inputTypePassword, setInputTypePassword] = useState("password");
	const [inputTypeConfirmPassword, setInputTypeConfirmPassword] = useState("password");

	function handleToggleViewPasswordInput() {
		if(inputTypePassword === "password")
			setInputTypePassword("text")
		else
			setInputTypePassword("password")
	}

	function handleToggleViewConfirmPasswordInput() {
		if(inputTypeConfirmPassword === "password")
			setInputTypeConfirmPassword("text")
		else
		setInputTypeConfirmPassword("password")
	}

  return (
		<div className="w-screen h-screen flex flex-col items-center justify-center bg-white">
			
			<form className="flex flex-col gap-4 items-stretch w-full max-w-md p-6 mt-10">
				<header className="flex flex-col items-center">
					<Heading size="lg">Budget</Heading>

					<Text>Crie uma conta e comece a usar</Text>
				</header>

				<label htmlFor="name" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Nome completo</Text>

					<Input.Root>
						<Input.Icon>
							<User />
						</Input.Icon>

						<Input.Input type="text" name="name" placeholder="Digite seu nome completo" />
					</Input.Root>
				</label>

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

						<Input.Input type={inputTypePassword} name="password" placeholder="Digite sua senha" />
						
						<button type="button" onClick={handleToggleViewPasswordInput}>
							<Input.Icon>
								{inputTypePassword === "password" ? <Eye /> : <EyeClosed />}
							</Input.Icon>
						</button>
					</Input.Root>
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Confirmação de senha</Text>

					<Input.Root>
						<Input.Icon>
							<Lock />
						</Input.Icon>

						<Input.Input type={inputTypeConfirmPassword} name="password" placeholder="Confirme sua senha" />

						<button type="button" onClick={handleToggleViewConfirmPasswordInput}>
							<Input.Icon>
								{inputTypeConfirmPassword === "password" ? <Eye /> : <EyeClosed />}
							</Input.Icon>
						</button>
					</Input.Root>
				</label>

				<Button type="submit">Cadastrar</Button>

				<footer className="flex flex-col items-center">
					<Text className="underline hover:text-gray-500" size="md">
							Já possui uma conta?
							<Link to="/signin"> Faça login</Link>
					</Text>
				</footer>
			</form>

		</div>
	);
};