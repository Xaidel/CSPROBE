import { useQueryClient } from "@tanstack/react-query";
import Heading from "../../components/Heading";

function CurriculumsDataHeader(): JSX.Element | undefined{
    const queryClient = useQueryClient();
    const currentUser = queryClient.getQueryData(["current-user"]);

    if(!currentUser) return;

    return (
        <>
            <Heading as="h1">CURRICULUM DATA</Heading>
        </>
    );
}
export default CurriculumsDataHeader;