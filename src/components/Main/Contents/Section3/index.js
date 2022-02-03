import styled from "styled-components";
import BoxVideo from "./BoxVideo";
import BoxQna from "./BoxQna";
import BoxDocument from "./BoxDocument";
import mediaQuery, {BREAKPOINT_MOBILE, BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
    width: 100vw;
	position: relative;
	padding: 2rem 0;
	box-sizing: border-box;
	
	.__1280 {
		width: 1280px;
		margin: 0 auto;
		padding-bottom: 3rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		
		${mediaQuery(BREAKPOINT_TABLET)} {
			width: 100%;
			padding: 0 16px 3rem;
			flex-direction: column;
			
			> :not(:first-child) {
				margin-top: 1rem;
			}
		}
		
		${mediaQuery(BREAKPOINT_MOBILE)} {
			padding: 0;
		}
	}
	
	${mediaQuery(BREAKPOINT_MOBILE)} {
		padding-bottom: 0;
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
