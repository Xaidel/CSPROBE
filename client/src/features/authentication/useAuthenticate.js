import { useQueryClient } from "@tanstack/react-query";

export function useAuthenticate(){
    const queryClient = useQueryClient();
    const queryCache = queryClient.getQueryCache();
    const query = queryCache.find({ queryKey: ["current-user"] });
    const authenticatedUser = query?.state?.data;
    return { authenticatedUser };
}
