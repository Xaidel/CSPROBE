import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../../services/Gateway";
import { useParams } from "react-router-dom";

export function useDeleteProgramOutcome(){
    const queryClient = useQueryClient();
    const { program_code } = useParams();
    const token = queryClient.getQueryData(["api-token"]);
    const { id } = queryClient.getQueryData([`${program_code}`]);
    const { mutate: deleteProgramOutcome, isPending: isDeleting } = useMutation({
        mutationFn: async () => {
            await client.ProgramOutcomes().delete(token, id);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return { isDeleting, deleteProgramOutcome };
}