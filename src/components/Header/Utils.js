import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
	position: absolute;
	right: 0;
	box-sizing: border-box;
	text-decoration: none;
	font-weight: bold;
	li {
		list-style: none;
	}

	.site_map {
		text-decoration: none;
		display: inline-block;

		a {
			text-decoration: none;
			color: #515151;
		}
	}

	.lang {
		::before {
			content: "";
			position: absolute;

			background-color: #707070;
			width: 1px;
			height: 1rem;
			opacity: 50%;
		}

		margin-left: 1rem;
		display: inline-block;

		ul {
			padding: 0;
		}

		li {
			display: inline-block;
		}

		a {
			cursor: pointer;
			text-decoration: none;
			color: #BFBFBF;
			margin-left: 1rem;
		}

		li.active a {
			color: #B70023;
		}
	}
`;

const Utils = ({isKor, setIsKor}) => {
	return (
		<Container>
			<ul>
				<li className={"site_map"}>
					<Link to={"/menu"}>SITE MAP</Link>
				</li>
				<li className={"lang"}>
					<ul>
						<li className={isKor ? "active" : ""}>
							<Link to={"/menu"} onClick={() => setIsKor(true)}>KOR</Link>
						</li>
						<li className={isKor ? "" : "active"}>
							<Link to={"/eng"} onClick={() => setIsKor(false)}>ENG</Link>
						</li>
					</ul>
				</li>
			</ul>
		</Container>
	)
};

export default Utils;