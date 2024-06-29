import styled from "styled-components";
import Row from "../components/Row";
import Heading from "../components/Heading";
import ProgramOfferingsList from "../features/programs/ProgramOfferingsList";

const ProgramsHR = styled.hr`
  border: 0.5px solid var(--color-gray-0);
  width: 100%;
`;
const ICantBreathe = styled.div`
  margin: 1rem 0rem;
`;

function ProgramOfferings() {
  return (
    <>
      <Row>
        <ICantBreathe />
        <Heading as="h1">PROGRAM OFFERINGS</Heading>
        <ProgramsHR />
      </Row>
      <Row>
        <ProgramOfferingsList />
      </Row>
    </>
  );
}
export default ProgramOfferings;
