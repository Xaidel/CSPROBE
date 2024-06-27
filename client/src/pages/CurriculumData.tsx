import styled from "styled-components";
import CurriculumsDataHeader from "../features/curriculum-data/CurriculumDataHeader";
import Row from "../components/Row";

const CurriculumsHR = styled.hr`
    border: 0.5px solid var(--color-gray-0);
    width: 100%;
`;
const ICantBreathe = styled.div`
    margin: 1rem 0rem;
`;
const CurriculumData:React.FC = () => {
    return (
        <>
            <Row>
                <ICantBreathe/>
                <CurriculumsDataHeader/>
            </Row>
            <Row>
                <CurriculumsHR/>
            </Row>
        </>
    );
}

export default CurriculumData;