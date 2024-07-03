import { useQuery, useQueryClient } from "@tanstack/react-query";

import client from "../../services/Gateway";
import { useParams } from "react-router-dom";

export function useProgramOutcome(){
    const queryClient = useQueryClient();
    const token = queryClient.getQueryData(["api-token"]);
    const { program_code } = useParams();
    const {
        isLoading,
        data: programOutcome,
        error,
    } = useQuery({
        queryKey: [`program-outcome-${program_code}`],
        queryFn: async () => {
            const res = await client.ProgramOutcomes().read(token, program_code);
            const { data } = res;
            return data;
        }
    });

    return { isLoading, programOutcome, error};
}