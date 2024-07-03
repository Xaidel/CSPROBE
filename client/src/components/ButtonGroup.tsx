import styled, { css } from "styled-components";

type IButtonGroup = {
  type?: "table";
};

const types = {
  table: css`
    margin-top: 0;
    gap: 1rem;
  `,
};

const ButtonGroup = styled.div<IButtonGroup>`
  margin-top: 3rem;
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  ${({ type }) => type && types[type]}
`;

export default ButtonGroup;
