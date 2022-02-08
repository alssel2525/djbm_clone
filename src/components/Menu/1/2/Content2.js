import styled from "styled-components";
import SubHeading from "../../common/SubHeading";
import SubTable from "../../common/SubTable";

const Container = styled.div`
	width: 1280px;
	max-width: 100%;
`;

const Content2 = () => {
	return (
		<Container>
			<SubHeading>실증사업 현황(3개 실증사업, 재정지원 총 40,423.5백만원)</SubHeading>
			<SubTable>
				<thead>
					<tr>
						<th colSpan={2}>세부 혁신사업 또는 전략사업</th>
						<th>사업기간</th>
						<th>총사업비(백만원)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td rowSpan={2}>기존</td>
						<td>기업전용 인체유래물은행 공동운영 실증</td>
						<td>2020.1~2021.12(2년)</td>
						<td>7,549.8</td>
					</tr>
					<tr>
						<td>체외진단기기의 신의료기술평가 유예 절차 간소화 실증</td>
						<td>2020.1~2021.12(2년)</td>
						<td>7,758.7</td>
					</tr>
					<tr>
						<td>추가</td>
						<td>병원체자원 공용연구시설 구축·운영으로 백신·치료제 조기 상용화</td>
						<td>2021.1~2022.12(2년)</td>
						<td>25,115.0</td>
					</tr>
					<tr>
						<td colSpan={2}>전체기간</td>
						<td>2020.1~2022.12(3년)</td>
						<td>40,423.5</td>
					</tr>
				</tbody>
			</SubTable>
		</Container>
	)
};

export default Content2;
