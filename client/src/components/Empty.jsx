import styled from "styled-components";

const StyledEmpty = styled.div`
  margin-left: 1.5rem;
`;

function Empty({ resourceName }) {
  return <StyledEmpty>No {resourceName} added yet.</StyledEmpty>;
}

export default Empty;
