import Form from "../../components/Form";
import Button from "../../components/Button";
import FormRow from "../../components/FormRow";
import Heading from "../../components/Heading";
import FileInput from "../../components/FileInput";
import Papa from "papaparse";
import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { useAddProgramOutcome } from "./useAddProgramOutcome";
import { useState } from "react";
import { useDeleteProgramOutcome } from "./useDeleteProgramOutcome";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function UploadProgramOutcomeForm({ onCloseModal }) {
  const [parsedData, setParsedData] = useState([]);
  const queryClient = useQueryClient();
  const { program_code } = useParams();
  const { addProgramOutcome, isCreating } = useAddProgramOutcome();
  const { deleteProgramOutcome } = useDeleteProgramOutcome();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  const onChangeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setParsedData(results.data);
      },
    });
  };

  function onSubmit() {
    const toastID = toast.loading("Parsing Data, Please wait...");
    deleteProgramOutcome();
    parsedData.map((programOutcome) => {
      addProgramOutcome(
        { ...programOutcome },
        {
          onSuccess: () => {
            toast.dismiss(toastID);
            toast.success("Program Outcomes Successfully Added");
            queryClient.invalidateQueries({
              queryKey: [`program-outcome-${program_code}`],
            });
            reset();
            onCloseModal();
          },
        }
      );
    });
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
      width={40}
    >
      <Heading as="h1">Upload Program Outcomes</Heading>
      <FormRow>
        <FileInput
          id="csv"
          accept=".csv"
          type="file"
          disabled={isCreating}
          {...register("csv", {
            required: "This field is required",
          })}
          onChange={onChangeHandler}
        />
      </FormRow>
      <FormRow>
        <Button
          $variant="secondary"
          size="small"
          type="modal"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button size="small" type="modal">
          Upload
        </Button>
      </FormRow>
    </Form>
  );
}

export default UploadProgramOutcomeForm;
