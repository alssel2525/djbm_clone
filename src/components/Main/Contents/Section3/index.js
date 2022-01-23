import styled from "styled-components";
import BoxVideo from "./BoxVideo";
import BoxQna from "./BoxQna";
import BoxDocument from "./BoxDocument";

const Container = styled.div`
    width: 100vw;
	padding: 2rem 0;
	
	.__1280 {
		width: 1280px;
		margin: 0 auto;
		padding-bottom: 3rem;
		display: flex;
		justify-content: space-between;
	}
`;

const Section3 = () => {
	return (
		<Container>
			<div className={"__1280"}>
				<BoxVideo/>
				<BoxQna/>
				<BoxDocument/>
			</div>
		</Container>
	)
};

export default Section3;