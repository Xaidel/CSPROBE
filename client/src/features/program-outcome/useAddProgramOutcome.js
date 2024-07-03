import { useMutation, useQueryClient } from "@tanstack/react-query";
import client from "../../services/Gateway";
import { useParams } from "react-router-dom";

export function useAddProgramOutcome(){
    const queryClient = useQueryClient();
    const { program_code } = useParams();
    const token = queryClient.getQueryData(["api-token"]);
    const { id } = queryClient.getQueryData([`${program_code}`]);
    let sequenceNum = 1;
    const { mutate: addProgramOutcome, isPending: isCreating } = useMutation({
        mutationFn: async (programOutcomes) => {
            const poDesc = programOutcomes.po_desc;
            const seqNum = programOutcomes.seq_num || sequenceNum;
            const progID = programOutcomes.program_id || id;
            sequenceNum++;
           await client.ProgramOutcomes().create(token, poDesc, progID, seqNum);
        },
        onSuccess:()=> {
            queryClient.invalidateQueries({queryKey: [`program-outcome-${program_code}`]});
        },
        onError: (error) => {
            console.log(error);
        }
    });

    return { isCreating, addProgramOutcome };
}