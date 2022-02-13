import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import SubTable from "../../common/SubTable";
import {Menu_1_3_1, Menu_1_3_2} from "../../../../Data/Menu/1/3";
import Color from "../../../../Color";

const Container = styled.div`
	a {
		color: ${Color.black};
		font-weight: 500;

		::after {
			content: "home";
			font-family: "Material Icons", sans-serif;
			position: absolute;
			top: 50%;
			margin-left: 0.5rem;
			transform: translateY(-50%);
			font-size: 1.1rem;
			color: ${Color.red};
		}
	}
`;

const Content1 = () => {
	// TODO 표 데이터 채워넣는 단순 작업
	
	return (
		<Container>
			<>
				<SubHeading>기업전용 인체유래물은행 공동운영 실증</SubHeading>
				<SubTable>
					<thead>
						<tr>
							<th>사업명</th>
							<th>특구사업자</th>
							<th>대표자</th>
							<th>위치</th>
							<th>비고</th>
						</tr>
					</thead>
					<tbody>
						{Menu_1_3_1.map((value, index, array) => (
							<tr>
								{index === 0 && <td rowSpan={array.length}>기업전용<br/>인체유래물은행<br/>공동운영 실증</td>}
								<td><a href={value.link} target={"_blank"} rel="noreferrer">{value.businessOwner}</a>
								</td>
								<td>{value.manager}</td>
								<td>{value.location}</td>
								<td>{value.note}</td>
							</tr>
						))}
					</tbody>
				</SubTable>
			</>
			<>
				<SubHeading>체외진단기기의 신의료기술평가 유예 절차 간소화 실증</SubHeading>
				<SubTable>
					<thead>
						<tr>
							<th>사업명</th>
							<th>특구사업자</th>
							<th>대표자</th>
							<th>위치</th>
							<th>비고</th>
						</tr>
					</thead>
					<tbody>
						{Menu_1_3_2.map((value, index, array) => (
							<tr>
								{index === 0 && <td rowSpan={array.length}>체외진단기기의<br/>신의료기술평가 유예 절차<br/>간소화 실증</td>}
								<td>
									<a href={value.link} target={"_blank"} rel="noreferrer">{value.businessOwner}</a>
								</td>
								<td>{value.manager}</td>
								<td>{value.location}</td>
								<td>{value.note}</td>
							</tr>
						))}
					</tbody>
				</SubTable>
			</>
		</Container>
	)
};

export default Content1;
