import styled from "styled-components";
import Row from "../components/Row";
import StudentPortfolioHeader from "../features/student-portfolio/StudentPortfolioHeader";

const PortfolioHR = styled.hr`
    border: 0.5px solid var(--color-gray-0);
    width: 100%;
`;
const ICantBreathe = styled.div`
    margin: 1rem 0rem;
`;

const StudentPortfolio:React.FC = () => {
    return (
        <>
            <Row>
                <ICantBreathe/>
                <StudentPortfolioHeader/>
            </Row>
            <Row>
                <PortfolioHR/>
            </Row>
        </>
    );
}

export default StudentPortfolio;