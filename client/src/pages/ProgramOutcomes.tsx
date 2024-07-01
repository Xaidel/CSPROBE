import styled from "styled-components";
import Heading from "../components/Heading";
import ProgramOutcomeTable from "../features/program-outcome/ProgramOutcomeTable";

const Layout = styled.div`
    display: flex;
    justify-content: center;
`;

const ProgramOutcomes: React.FC = () => {

    return (
        <>
            <Layout>
                <Heading as="h1">Program Outcomes Statements</Heading>
            </Layout>
            <ProgramOutcomeTable/>
        </>
    );

}

export default ProgramOutcomes;