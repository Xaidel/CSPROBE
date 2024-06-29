import { useQueryClient } from "@tanstack/react-query";
import { useProgram } from "./useProgram";
import styled from "styled-components";
import Spinner from "../../components/Spinner";
import ProgramCard from "../../components/ProgramCard";

const ProgramsLayout = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
  padding: 5rem;
  min-height: inherit;
`;

function ProgramOfferingsList() {
  const queryClient = useQueryClient();
  const { programs, isLoading } = useProgram();
  const currentUser = queryClient.getQueryData(["current-user"]);

  if (!currentUser) return;
  return (
    <>
      <ProgramsLayout>
        {isLoading && <Spinner />}
        {!isLoading &&
          programs.map((program) => (
            <ProgramCard program={program} key={program.id} />
          ))}
      </ProgramsLayout>
    </>
  );
}
export default ProgramOfferingsList;
