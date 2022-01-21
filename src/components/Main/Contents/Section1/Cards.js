import styled from "styled-components";
import {MainContentSection1Cards} from "../../../../Data";
import Card from "./Card";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 0;
`;

const Cards = () => {
	return (
		<Container>
			{
				MainContentSection1Cards.map((card, index) => (
					<Card key={index} card={card}/>
				))
			}
		</Container>
	)
};

export default Cards;