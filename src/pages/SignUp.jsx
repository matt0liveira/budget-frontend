import { CurrencyDollar, Envelope, Eye, EyeClosed, Lock, User } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { Input } from "../components/Input";
import Text from "../components/Text";
import useApi from "../helpers/Api";

export default () => {
	const [inputTypePassword, setInputTypePassword] = useState("password");
	const [inputTypeConfirmPassword, setInputTypeConfirmPassword] = useState("password");

	const api = useApi();
	const { register, handleSubmit, formState: { errors } } = useForm({
		mode: "onBlur" 
	});
	const navigate = useNavigate();

	const onSubmit = async data => {
		if(data.confirmPassword === data.password) {
			const user = {
				name: data.name,
				balance: data.balance,
				email: data.email,
				password: data.password
			};

			const body = JSON.stringify(user);

			const response = await api.addUser(body);

			if(response.ok) {
				alert("Cadastro realizado com sucesso!");
				navigate("/signin");
				return;
			} else {
				const data = await response.json();
				alert(data.userMessage);
			}
		} else {
			alert("Sua senha não combina com a confirmação de senha")
		}
	};

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
			
			<form className="flex flex-col gap-4 items-stretch w-full max-h-screen max-w-md p-6" onSubmit={handleSubmit(onSubmit)}>
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

						<Input.Input 
							type="text"
							name="name"
							placeholder="Digite seu nome completo"
							{...register("name", { required: "Nome é obrigatório"})} />
					</Input.Root>
					{errors?.name && 
						<Text size="sm" className="bg-red-400 text-gray-50 p-2 rounded">
							{errors?.name.message}
						</Text>
					}
				</label>

				<label htmlFor="balance" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Seu saldo</Text>

					<Input.Root>
						<Input.Icon>
						<CurrencyDollar />
						</Input.Icon>

						<Input.Input
							type="number"
							name="balance"
							placeholder="Digite seu saldo disponível"
							{...register("balance", { required: "Saldo é obrigatório", min: { value: 0, message: "Saldo deve ser maior ou igual a zero" } })} />
					</Input.Root>
					{errors.balance && <Text size="sm" className="bg-red-400 text-gray-50 p-2 rounded">{errors.balance?.message}</Text>}
				</label>

				<label htmlFor="email" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Endereço de e-mail</Text>

					<Input.Root>
						<Input.Icon>
							<Envelope />
						</Input.Icon>

						<Input.Input 
							type="email"
							name="email"
							placeholder="Digite seu e-mail"
							{...register("email", { required: "Endereço de e-mail é obrigatório" })} />
					</Input.Root>
					{errors.email && <Text size="sm" className="bg-red-400 text-gray-50 p-2 rounded">{errors.email?.message}</Text>}
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Sua senha</Text>

					<Input.Root>
						<Input.Icon>
							<Lock />
						</Input.Icon>

						<Input.Input 
							type={inputTypePassword} 
							name="password" 
							placeholder="Digite sua senha"
							{...register("password", { required: "Senha é obrigatório" })} />
						
						<button type="button" onClick={handleToggleViewPasswordInput}>
							<Input.Icon>
								{inputTypePassword === "password" ? <Eye /> : <EyeClosed />}
							</Input.Icon>
						</button>
					</Input.Root>
					{errors.password && <Text size="sm" className="bg-red-400 text-gray-50 p-2 rounded">{errors.password?.message}</Text>}
				</label>

				<label htmlFor="password" className="flex flex-col gap-3">
					<Text className="font-semibold" color="gray-dark">Confirmação de senha</Text>

					<Input.Root>
						<Input.Icon>
							<Lock />
						</Input.Icon>

						<Input.Input 
							type={inputTypeConfirmPassword} 
							name="password"
							placeholder="Confirme sua senha"
							{...register("confirmPassword", { required: "Confirmação de senha é obrigatório" })} />

						<button type="button" onClick={handleToggleViewConfirmPasswordInput}>
							<Input.Icon>
								{inputTypeConfirmPassword === "password" ? <Eye /> : <EyeClosed />}
							</Input.Icon>
						</button>
					</Input.Root>
					{errors.confirmPassword && <Text size="sm" className="bg-red-400 text-gray-50 p-2 rounded">{errors.confirmPassword?.message}</Text>}
				</label>

				<Button type="submit">Cadastrar</Button>

				<footer className="flex flex-col items-center">
					<Text className="my-2 underline hover:text-gray-500" size="md">
							Já possui uma conta?
							<Link to="/signin"> Faça login</Link>
					</Text>
				</footer>
			</form>

		</div>
	);
};