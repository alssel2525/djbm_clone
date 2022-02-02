import styled from "styled-components";
import Color from "../../Color";
import mediaQuery, {BREAKPOINT_TABLET} from "../../hooks/mediaQuery";

const Container = styled.div`
	position: absolute;
	right: 0;
	top: 0;

	fieldset {
		width: 100%;
		height: 2.5rem;
		position: relative;
		border: 1px solid ${Color.grey};
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		
		&:hover {
			border-color: #454c69;
		}
	}

	label {
		width: calc(100% - 0.5rem);
		height: 100%;
		line-height: 2.5rem;
		position: absolute;
		top: 0;
		left: 0.5rem;
		margin: 0;
		color: white;
		text-align: left;
		white-space: nowrap;
		box-sizing: border-box;

		::after {
			font-family: Material Icons, sans-serif;
			content: "expand_more";
			position: absolute;
			right: 0.5rem;
			line-height: 2.5rem;
			transition: transform .3s;
			color: white;
		}
	}
	
	&:hover label::after {
		transform: rotate(180deg);
	}

	select {
		position: relative;
		width: 100%;
		height: 100%;
		padding: 0;
		cursor: pointer;
		font-size: 1rem;

		align-items: center;
		box-sizing: border-box;
		opacity: 0;
	}
	
	${mediaQuery(BREAKPOINT_TABLET)} {
		position: relative;
		margin-top: 1rem;
	}
`;

const Sites = () => {
	const onChange = (e) => {
		if (e.target.value) {
			window.open(e.target.value);
		}
	};
	
	return (
		<Container>
			<fieldset>
				<label>관련사이트</label>
				<select onChange={onChange}>
					<option value={""}>관련사이트</option>
					<option value={"https://www.djtp.or.kr/"}>대전테크노파크</option>
					<option value={"http://www.dbvt.or.kr/"}>대전바이오벤처타운</option>
				</select>
			</fieldset>
		</Container>
	)
};

export default Sites;