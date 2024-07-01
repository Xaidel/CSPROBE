import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelectedProgram } from "./useSelectedProgram";

import styled from "styled-components";
import Row from "../../components/Row";
import Heading from "../../components/Heading";
import Spinner from "../../components/Spinner";

import SelectedProgramNav from "../../components/SelectedProgramNav";

const ICantBreathe = styled.div`
  font-size: 3.5rem;
  & svg:hover {
    color: var(--color-orange-0);
  }
`;

function SelectedProgramHeader() {
  const { isLoading, selectedProgram } = useSelectedProgram();
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;

  const handleBack = () => {
    navigate("/programs/program-offerings");
  };

  return (
    <>
      <Row>
        <ICantBreathe>
          <IoArrowBackCircleOutline onClick={handleBack} />
        </ICantBreathe>
        <Heading as="h1">
          {selectedProgram.program_description.toUpperCase()}
        </Heading>
        <SelectedProgramNav />
      </Row>
    </>
  );
}

export default SelectedProgramHeader;
