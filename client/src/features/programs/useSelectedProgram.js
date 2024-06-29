import { useQuery, useQueryClient } from "@tanstack/react-query";

import client from "../../services/Gateway";
import { useParams } from "react-router-dom";

export function useSelectedProgram(){

    const queryClient = useQueryClient();
    const token = queryClient.getQueryData(["api-token"]);
    const { program_code } = useParams();
    const { isLoading, data: selectedProgram, error} = useQuery({
        queryKey: [`${program_code}`],
        queryFn: async () => {
            const res = await client.Program().read(token, program_code);
            const { data } = res;
            return data;
        }
    });
    return { isLoading, selectedProgram, error};
}
