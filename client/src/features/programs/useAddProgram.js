import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import client from "../../services/Gateway";

export function useAddProgram(){
    const queryClient = useQueryClient();
    const token = queryClient.getQueryData(["api-token"]);
    const { mutate: addProgram, isPending: isCreating } = useMutation({
        mutationFn: async (program) => {
            const programCode = program.program_code;
            const programDesc = program.program_description;

            await client.Program().create(token,programCode, programDesc);
        },
        onSuccess: () => {
            toast.success("Program Successfully added");
            queryClient.invalidateQueries({queryKey: ["programs"]});
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return { isCreating, addProgram };
}