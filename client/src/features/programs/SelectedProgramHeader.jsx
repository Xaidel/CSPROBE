import styled from "styled-components";
import Row from "../../components/Row";
import Heading from "../../components/Heading";
import { useSelectedProgram } from "./useSelectedProgram";
import Spinner from "../../components/Spinner";

const ProgramsHR = styled.hr`
  border: 0.5px solid var(--color-gray-0);
  width: 100%;
`;
const ICantBreathe = styled.div`
  margin: 1rem 0rem;
`;

function SelectedProgramHeader() {
  const { isLoading, selectedProgram } = useSelectedProgram();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row>
        <ICantBreathe />
        <Heading as="h1">{selectedProgram.program_description}</Heading>
        <ProgramsHR />
      </Row>
    </>
  );
}

export default SelectedProgramHeader;
