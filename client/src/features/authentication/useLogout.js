import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import client from "../../services/Gateway";

export function useLogout(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const token = queryClient.getQueryData(["api-token"]);
    const {mutate: logout, isPending } = useMutation({
        mutationFn: async () => {
            const res = await client.logout(token);
            return res;
        },
        onSettled: () => {
            queryClient.clear();
            console.log(queryClient.getQueryData('api-token'));
            navigate("/login");
        }
    });
    return { logout, isPending };
}