import Card from "../components/Card";
import Container from "./Container";

export default () => {
	const widthCard = "400px";
	const heightCard = "200px";

	return (
		<Container titlePage="Dashboards • Geral">
			<div className="w-scren flex flex-row justify-evenly flex-wrap">
				<Card title="qtd. transações" value="45.000" className={`w-[${widthCard}] h-[${heightCard}] my-2`} />
				<Card title="qtd. receitas" value="45.000" className={`w-[${widthCard}] h-[${heightCard}] my-2`} />
				<Card title="qtd. despesas" value="45.000" className={`w-[${widthCard}] h-[${heightCard}] my-2`} />
				<Card title="total transações" value="45.000" className={`w-[${widthCard}] h-[${heightCard}] my-2`} />
				<Card title="total receitas" value="45.000" className={`w-[${widthCard}] h-[${heightCard}] my-2`} />
				<Card title="total despesas" value="45.000" className={`w-[${widthCard}] h-[${heightCard}] my-2`} />
			</div>
		</Container>
	);
}