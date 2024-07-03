import styled from "styled-components";
import Heading from "./Heading";
import { useNavigate } from "react-router-dom";

const ProgramCardLayout = styled.div`
  height: 30rem;
  width: auto;
  border: 2.5px solid var(--color-gray-2);
  box-shadow: 10px 10px 7px -4px rgba(71, 69, 72, 0.17);
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  justify-content: center;
  flex: 1 1 35%;

  &:hover {
    border: 2px solid var(--color-orange-0);
  }
`;

const ProgramDescription = styled.p`
  margin: 1rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
`;

function ProgramCard({ program }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/programs/program-offerings/${program.program_code}`);
  };

  return (
    <>
      <ProgramCardLayout onClick={handleClick}>
        <Heading as="h4">{program.program_code}</Heading>
        <ProgramDescription>{program.program_description}</ProgramDescription>
      </ProgramCardLayout>
    </>
  );
}

export default ProgramCard;
