import { useQuery, useQueryClient } from "@tanstack/react-query";

import client from "../../services/Gateway";

export function useProgram(){
    const queryClient = useQueryClient();
    const token = queryClient.getQueryData(["api-token"]);
    const {
        isLoading,
        data: programs,
        error,
    } = useQuery({
        queryKey: ["programs"],
        queryFn: async () => {
            const res = await client.Program().read(token);
            const { data } = res;
            return data;
        }
    });

    return { isLoading, programs, error };
}