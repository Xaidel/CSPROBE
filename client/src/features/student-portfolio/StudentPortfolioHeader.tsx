import { useQueryClient } from "@tanstack/react-query";
import Heading from "../../components/Heading";

function StudentPortfolioHeader(): JSX.Element | undefined{
  const queryClient = useQueryClient();
  const currentUser = queryClient.getQueryData(["current-user"]);

  if (!currentUser) return;

  return (
    <>
      <Heading as="h1">STUDENT PORTFOLIO</Heading>
    </>
  );
}
export default StudentPortfolioHeader;
