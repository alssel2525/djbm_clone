import styled from "styled-components";
import {MainContentSection1Cards} from "../../../../Data";
import Card from "./Card";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 1rem 0;
	margin: 0 auto;
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		flex-direction: column;
		max-width: 60%;
	}
`;

const Cards = () => {
	const [ref, isVisible] = useIntersectionObserver({root: null, rootMargin: "0px", threshold: 0});
	
	return (
		<Container ref={ref}>
			{
				MainContentSection1Cards.map((card, index) => (
					<Card key={index} card={card} index={isVisible ? index : -1}/>
				))
			}
		</Container>
	)
};

export default Cards;