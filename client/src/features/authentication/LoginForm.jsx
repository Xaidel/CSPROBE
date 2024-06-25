import { useQueryClient } from "@tanstack/react-query";
import { useLogin } from "./useLogin";
import { useForm } from "react-hook-form";

import Form from "../../components/Form";
import FormRowVertical from "../../components/FormRowVertical";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SpinnerMini from "../../components/SpinnerMini";

function LoginForm() {
  const { login, isPending } = useLogin();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {},
  });
  const queryClient = useQueryClient();

  queryClient.removeQueries();

  const { errors } = formState;

  function onSubmit(data) {
    login({ ...data });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical
        label="User ID"
        marginTop={0}
        error={errors?.userID?.message}
      >
        <Input
          type="text"
          id="userID"
          autoComplete="userID"
          placeholder="Enter your User ID"
          disabled={isPending}
          {...register("userID", {
            required: "User ID is required",
          })}
        />
      </FormRowVertical>
      <FormRowVertical
        label="Password"
        marginTop={0}
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          autoComplete="password"
          placeholder="Enter your Password"
          disabled={isPending}
          {...register("password", {
            required: "Password is required",
          })}
        />
      </FormRowVertical>
      <FormRowVertical marginTop={5}>
        <Button size="large">{isPending ? <SpinnerMini /> : "Login"}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
