import { ArrowDown, ArrowUp, Faders, Pen, X } from "phosphor-react";
import Card from "../components/Card";
import Text from "../components/Text";
import Container from "./Container";

export default () => {
	return (
		<Container titlePage="Transações">
			<div className="w-full flex flex-col">
				<div className="w-full flex flex-wrap flex-row justify-between">
					<Card title="saldo disponível" value="45.000" className="w-[50%] h-[200px]" />
					<Card title="hoje • qtd. transações" value="10" className="w-[23%] h-[200px]" />
					<Card title="hoje • total transações" value="1.000" className="w-[23%] h-[200px]" />
				</div>

					<div className="w-full bg-white shadow-2xl mt-12 mb-2 rounded-tl-md rounded-tr-md flex justify-between p-2">
						<header>
						<Faders size={22} />
						</header>

						<div className="w-[95%] flex justify-evenly">
							<label htmlFor="typeTransaction">
								<Text size="sm" className="font-bold text-gray-800">Tipo Transação: </Text>
								<select name="typeTransaction" className="font-sans text-gray-500 text-[14px] outline-none">
									<option value="">Todos</option>
									<option value="EXPENSE">Despesa</option>
									<option value="INCOME">Receita</option>
								</select>
							</label>

							<label htmlFor="category">
								<Text size="sm" className="font-bold text-gray-800">Categoria: </Text>
								<select name="category" className="font-sans text-gray-500 text-[14px] outline-none">
									<option value="">Nenhuma</option>
									<option value="1">Compras</option>
									<option value="2">Lazer</option>
								</select>
							</label>

						<label htmlFor="dateInitialTransaction">
							<Text size="sm" className="font-bold text-gray-800">Data inicial de transações: </Text>
							<input type="date" name="dateInitialTransaction" className="font-sans text-gray-500 text-[14px] outline-none" />
						</label>

						<label htmlFor="dateInitialTransaction">
							<Text size="sm" className="font-bold text-gray-800">Data final de transações: </Text>
							<input type="date" name="dateFinalTransaction" className="font-sans text-gray-500 text-[14px] outline-none" />
						</label>

						<button className="bg-emerald-500 rounded-full px-4 transition-all hover:bg-emerald-400">
							<Text size="sm" className="text-white">
								Filtrar
							</Text>
						</button>
						</div>
					</div>

				<div className="w-full bg-white shadow-lg rounded-md">

					<table className="w-full border-collapse">
						<thead className="border-[1px] h-12">
							<tr>
								<th>
									<Text className="text-gray-700">
										Tipo Transação
									</Text>
								</th>
								<th>
									<Text className="text-gray-700">
										Descrição
									</Text>
									</th>
								<th>
									<Text className="text-gray-700">
										Categoria
									</Text>
									</th>
								<th>
									<Text className="text-gray-700">
										Valor
									</Text>
									</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center h-12 border-b-[1px]">
								<td className="flex justify-center">
									<div className="w-8 h-8 rounded-full bg-green-500 flex justify-center items-center">
										<ArrowUp size={20} color="#ffffff" />
									</div>
								</td>
								<td className="font-semibold text-gray-500">Presente</td>
								<td className="w-full h-12 font-semibold text-gray-500 flex justify-center items-center">
									<div className="w-8 h-8 rounded-full bg-purple-600 mr-4"></div>
									Compras
								</td>
								<td className="font-semibold text-gray-500">45.000</td>
								<td className="h-12 flex justify-center items-center">
									<button className="w-8 h-8 flex justify-center items-center bg-blue-500 rounded-full mr-4">
										<Pen size={18} color="#ffffff" />
									</button>

									<button className="w-8 h-8 flex justify-center items-center bg-red-500 rounded-full">
										<X size={18} color="#ffffff" />
									</button>
								</td>
							</tr>

							<tr className="text-center h-12 border-b-[1px]">
								<td className="flex justify-center">
									<div className="w-8 h-8 rounded-full bg-red-500 flex justify-center items-center">
										<ArrowDown size={20} color="#ffffff" />
									</div>
								</td>
								<td className="font-semibold text-gray-500">Salário</td>
								<td className="w-full h-12 font-semibold text-gray-500 flex justify-center items-center">
									<div className="w-8 h-8 rounded-full bg-purple-600 mr-4"></div>
									Compras
								</td>
								<td className="font-semibold text-gray-500">45.000</td>
								<td className="h-12 flex justify-center items-center">
									<button className="w-8 h-8 flex justify-center items-center bg-blue-500 rounded-full mr-4">
										<Pen size={18} color="#ffffff" />
									</button>

									<button className="w-8 h-8 flex justify-center items-center bg-red-500 rounded-full">
										<X size={18} color="#ffffff" />
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</Container>
	);
}