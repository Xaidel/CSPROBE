import { useMutation,useQueryClient } from "@tanstack/react-query";

import client from "../../services/Gateway";
import toast from "react-hot-toast";

export function useLogin(){
    const queryClient = useQueryClient();

    const { mutate: login, isPending } = useMutation({
        mutationFn: async ({ userID, password}) => {
            const  user  = await client.login(userID, password);
            return user;
        },
        onSettled: (user) => {
            const currentUser = {
                ...user
            };
            if(user){
                queryClient.setQueryData(["current-user"], currentUser);
                queryClient.setQueryData(["api-token"], currentUser.token);
            }
            if(!user) toast.error("Username or password is incorrect");
        }
    });
    return { login, isPending };
}