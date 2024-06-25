import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: var(--color-orange-0);
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      color: var(--color-orange-0);
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: var(--color-orange-0);
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      color: var(--color-orange-0);
      font-size: 7rem;
      font-weight: 600;
      text-align: center;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 2rem;
      font-weight: 500;
      color: var(--color-gray-5);
    `}
    
  line-height: 1.4;
  font-family: 'Poppins';
`;

export default Heading;
