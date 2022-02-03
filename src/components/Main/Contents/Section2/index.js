import styled from "styled-components";
import QuickMenuIcons from "./QuickMenuIcons";
import Color from "../../../../Color";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
	width: 100%;
	padding: 4rem 0;
	box-sizing: border-box;
	color: ${Color.black};

	strong {
		font-size: 2rem;
	}

	.__1280 {
		margin: 0 auto;
		width: 1280px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-sizing: border-box;

		.title {
			transition: 1s ease;
			transform: ${props => props.isVisible === true ? "scale(1)" : "scale(1.3)"};
			opacity: ${props => props.isVisible === true ? 1 : 0};
		}

		${mediaQuery(BREAKPOINT_TABLET)} {
			width: 100%;
			padding: 0 16px;

			.title {
				display: none;
			}
		}
	}
`;

const Section2 = () => {
	const [ref, isVisible] = useIntersectionObserver({threshold: 0, root: null, rootMargin: "-300px 0px"});
	
	return (
		<Container ref={ref} isVisible={isVisible}>
			<div className={"__1280"}>
				<div className={"title"}>
					<strong>Quick Menu</strong><br/><br/>
					대전 바이오메디컬<br/>
					규제자유특구 빠른 메뉴 서비스
				</div>
				<QuickMenuIcons isVisible={isVisible}/>
			</div>
		</Container>
	)
};

export default Section2;
