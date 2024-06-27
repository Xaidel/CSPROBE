import styled from "styled-components";
import Row from "../components/Row";
import ProgramsHeader from "../features/programs/ProgramsHeader";

const ProgramsHR = styled.hr`
    border: 0.5px solid var(--color-gray-0);
    width: 100%;
`;
const ICantBreathe = styled.div`
    margin: 1rem 0rem;
`;

const Programs:React.FC = () => {
    
    return (
        <>
            <Row>
                <ICantBreathe/>
                <ProgramsHeader/>
            </Row>
            <Row>
                <ProgramsHR/>
            </Row>
        </>
    );
}

export default Programs;