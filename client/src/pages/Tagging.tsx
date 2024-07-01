import styled from "styled-components";
import Heading from "../components/Heading";

const Layout = styled.div`
    display: flex;
    justify-content: center;
`;

const Tagging: React.FC = () => {

    return (
        <>
            <Layout>
                <Heading as="h1">CSPROBE Tags</Heading>
            </Layout>
        </>
    );

}

export default Tagging;