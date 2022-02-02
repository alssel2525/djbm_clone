import styled from "styled-components";
import video_button from "../../../../images/video_button.png";
import thumbnail from "../../../../images/thumbnail.jpg";
import Color from "../../../../Color";
import mediaQuery, {BREAKPOINT_TABLET} from "../../../../hooks/mediaQuery";

const Container = styled.div`
	width: 400px;
	height: 16rem;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	
	border-bottom: 1px solid ${Color.grey};
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		width: 60%;
	}
`;

const Video = styled.div`
	width: 100%;
	height: 13rem;
	position: relative;
	background-image: url(${thumbnail});
	background-size: cover;

	div {
		width: 100%;
		height: 100%;
		position: absolute;
		content: url(${video_button});
		object-fit: none;
	}
`

const Text = styled.div`
	height: 3rem;
	line-height: 3rem;
	font-weight: bold;
	position: relative;
	
	::after {
		content: "keyboard_arrow_right";
		font-family: Material Icons, sans-serif;
		text-align: right;
		position: absolute;
		right: 0;
		color: ${Color.grey};
	}
`

const BoxVideo = () => {
	return (
		<Container>
			<Video>
				<div/>
			</Video>
			<Text>홍보동영상</Text>
		</Container>
	)
};

export default BoxVideo;