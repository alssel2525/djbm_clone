import styled from "styled-components";
import Color from "../../../../Color";
import {useState} from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Container = styled.div`
	width: 100%;
	box-sizing: border-box;

	a.system {
		height: 3rem;
		line-height: 1rem;
		margin-bottom: 1rem;
		padding: 1rem;
		position: relative;
		display: block;
		float: right;
		text-align: center;
		text-decoration: none;
		font-weight: 500;
		background: ${Color.greyBlue};
		color: ${Color.white};
		box-sizing: border-box;

		::after {
			content: "layers";
			font-family: Material Icons, sans-serif;
			margin-left: 5px;
			font-size: 1rem;
			line-height: 1rem;
		}
	}

	ul.tab {
		width: 100%;
		height: 50px;
		margin: 0;
		padding: 0;
		display: table;
		table-layout: fixed;
		position: relative;
		box-sizing: border-box;

		li {
			width: 100%;
			height: 50px;
			position: relative;
			display: table-cell;
			vertical-align: middle;
			text-align: center;
			border: 1px solid ${Color.lightgrey};
			transition: 0.3s ease all;
			cursor: pointer;
			box-sizing: border-box;

			::before {
				content: "";
				width: 100%;
				height: 0;
				position: absolute;
				left: 0;
				bottom: 0;
				background: ${Color.blueLighter};
				transition: 0.3s ease all;
			}

			span {
				width: 100%;
				height: 100%;
				position: relative;
				color: ${Color.black};
				transition: 0.3s ease all;
			}

			:hover {
				::before {
					height: 100%;
				}

				span {
					color: ${Color.white};
				}
			}
		}

		li:nth-child(${props => props.activeTab}) {
			::before {
				height: 100%;
			}

			span {
				color: ${Color.white};
			}

			::after {
				content: "";
				width: 15px;
				height: 15px;
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translate(-50%, 50%) rotate(45deg);
				background: ${Color.blueLighter};
			}
		}
	}
`;

const TabSelector = () => {
	const [activeTab, setActiveTab] = useState(1);
	
	return (
		<Container activeTab={activeTab}>
			<a className={"system"} href={"https://portal.djbm.or.kr:8443/djbm/"} target={"_blank"} rel="noreferrer">
				<span>검체분양 총괄시스템</span>
			</a>
			<ul className={"tab"}>
				<li onClick={() => setActiveTab(1)}>
					<span>사업내용</span>
				</li>
				<li onClick={() => setActiveTab(2)}>
					<span>분양절차</span>
				</li>
			</ul>
			<Tab1 isActive={activeTab === 1}/>
			<Tab2 isActive={activeTab === 2}/>
		</Container>
	)
};

export default TabSelector;
