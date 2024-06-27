import { useQueryClient } from "@tanstack/react-query";
import Heading from "../../components/Heading";

function ProgramsHeader() {
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData(["current-user"]);

  if (!currentUser) return;

  return (
    <>
      <Heading as="h1">PROGRAM OFFERINGS</Heading>
    </>
  );
}
export default ProgramsHeader;
