import styled from "styled-components";
import Color from "../../../../Color";

const Container = styled.div`
	padding: 40px;
	display: ${props => props.isActive === true ? "block" : "none"};
	background: ${Color.lightGreyBlue};

	p.title {
		font-size: 1.5rem;
		color: ${Color.blue};
		text-align: center;
		font-weight: bold;
	}
`;

const Table = styled.table`
	width: 100%;
	padding: 0 40px;
	border-spacing: 1rem;
	text-align: center;
	box-sizing: border-box;

	thead {
		> tr > th {
			padding: 1rem 0;
			font-size: 1.5rem;
			font-weight: 500;
			color: ${Color.white};
			box-sizing: border-box;

			:nth-child(1) {
				background: ${Color.greyBlue};
			}

			:nth-child(2) {
				background: ${Color.blueLighter};
			}

			:nth-child(3) {
				background: ${Color.blue};
			}
		}
	}

	tbody {
		counter-reset: index;

		> tr {
			counter-increment: index;
			
			> td {
				background: ${Color.white};
				border: 1px solid ${Color.lightgrey};
				height: 100px;
				position: relative;
				
				:nth-child(1) {
					::before {
						content: counter(index, decimal-leading-zero);
						width: 2.5rem;
						height: 2.5rem;
						line-height: 2.5rem;
						position: absolute;
						top: 50%;
						left: 0;
						transform: translate(-50%, -50%);
						border: 7px solid ${Color.lightGreyBlue};
						border-radius: 50%;
						background: ${Color.greyBlue};
						color: ${Color.white};
						font-family: 'Sora', sans-serif;
						font-weight: 600;
					}
				}
			}
		}
	}
`

const Tab2 = ({isActive}) => {
	return (
		<Container isActive={isActive}>
			<p className={"title"}>분양신청 방법 및 절차</p>
			<Table>
				<thead>
					<tr>
						<th>운영절차</th>
						<th>추진주체</th>
						<th>주요내용</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
					<tr>
						<td>기업 맞춤형 컨설팅</td>
						<td>인체유래물은행(대전TP)</td>
						<td>- 수요 검체 조건 등에 대한 세부 논의</td>
					</tr>
				</tbody>
			</Table>
		</Container>
	)
};

export default Tab2;
