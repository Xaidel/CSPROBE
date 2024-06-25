import { useMutation, useQueryClient } from "@tanstack/react-query";

import client from "../../services/Gateway";

export async function useLogin(){
    const res = await client.login("1037", "password123");
    console.log(res.user.userID);
    const queryClient = useQueryClient();
    //const mutations = queryClient.getMutationCache().getAll();

    const { mutate: login, isPending } = useMutation({
        mutationFn: async () => {
            const { user } = await client.login("1037", "password123");
            console.log(user.token);
            return user;
        },
        onSettled: (user) => {
            const currentUser = {
                ...user,
            };

            if(user){
                queryClient.setQueryData(['current-user'], currentUser);
            }
        }
    });

    return { login, isPending };
}