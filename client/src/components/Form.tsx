import styled, { css } from "styled-components";

type IForm = {
  type?: "modal";
  width?: number;
};

const Form = styled.form<IForm>`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 2.4rem 4rem;

      border-radius: var(--border-radius-md);
    `}

  /* ${(props) =>
    props.type === "modal" &&
    css`
      width: 40rem;
    `} */

  width: ${(props) => props.width}rem;

  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
