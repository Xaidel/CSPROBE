import styled, { css } from "styled-components";

type IButton = {
  $variant?:
    | "primary"
    | "secondary"
    | "success"
    | "successDisabled"
    | "danger"
    | "dangerDisabled"
    | "comments";
  size?: "small" | "small2" | "medium" | "large";
  type?: "modal";
};

const types = {
  modal: css`
    flex: 1;
  `,
};

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.8rem 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  small2: css`
    font-size: 1.2rem;
    padding: 0.8rem 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    width: 40%;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variants = {
  primary: css`
    color: var(--color-white-0);
    background-color: var(--color-gray-3);
    border-radius: var(--border-radius-sm);

    &:hover {
      background-color: var(--color-gray-0);
    }
  `,
  secondary: css`
    color: var(--color-gray-8);
    background-color: var(--color-white-0);
    box-shadow: none;
    border: 1px solid var(--color-gray-8);
    font-weight: 600;
    border-radius: var(--border-radius-sm);

    &:hover {
      background-color: var(--color-gray-0);
      color: var(--color-white-0);
    }
  `,
  success: css`
    background-color: var(--color-green-1);
    color: var(--color-white-0);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-sm);

    &:hover {
      background-color: var(--color-green-3);
      color: var(--color-white-0);
      transition: all 0.3s;
    }
  `,
  successDisabled: css`
    background-color: var(--color-green-4);
    color: var(--color-white-0);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-sm);
  `,
  danger: css`
    background-color: var(--color-red-0);
    color: var(--color-white-0);
    padding: 0.9rem 2rem;
    border-radius: var(--border-radius-sm);

    &:hover {
      background-color: var(--color-red-4);
      color: var(--color-white-0);
      transition: all 0.3s;
    }
  `,
  dangerDisabled: css`
    background-color: var(--color-red-5);
    color: var(--color-white-0);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-sm);
  `,
  comments: css`
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-gray-5);
    padding: 0.5rem 0rem;
    background-color: var(--color-white-0);
    width: 100%;
    text-align: left;
    border-radius: none;

    &:hover {
      background-color: var(--color-gray-4);
      border-radius: none;
    }
  `,
};

const Button = styled.button<IButton>`
  border: none;
  box-shadow: var(--shadow-sm);

  ${({ size }) => size && sizes[size]};
  ${({ $variant }) => $variant && variants[$variant]};
  ${({ type }) => type && types[type]}
`;

Button.defaultProps = {
  $variant: "primary",
  size: "medium",
};

export default Button;
