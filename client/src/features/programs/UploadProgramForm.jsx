import Form from "../../components/Form";
import Button from "../../components/Button";
import FormRow from "../../components/FormRow";
import Heading from "../../components/Heading";
import FileInput from "../../components/FileInput";
import Papa from "papaparse";

import { useForm } from "react-hook-form";
import { useAddProgram } from "./useAddProgram";
import { useState } from "react";

function UploadProgramForm({ onCloseModal }) {
  const [parsedData, setParsedData] = useState([]);
  const { addProgram, isCreating } = useAddProgram();
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
    parsedData.map((program) => {
      addProgram(
        { ...program },
        {
          onSuccess: () => {
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
      <Heading as="h1">Upload Program</Heading>
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
          Submit
        </Button>
      </FormRow>
    </Form>
  );
}

export default UploadProgramForm;
