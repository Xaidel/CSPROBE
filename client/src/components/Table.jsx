import { createContext, useContext } from "react";

import styled from "styled-components";
import Empty from "./Empty";

const StyledTable = styled.div`
  border: 1px solid var(--color-gray-0);
  margin-top: 2rem;
  font-size: 1.4rem;
  max-height: 50rem;
  background-color: var(--color-grey-0);
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const StyledEmpty = styled.div`
  padding: 1rem;
  min-height: 40rem;
  max-height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.2rem 2.4rem;
  position: sticky;
  top: 0;

  background-color: var(--color-gray-4);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-gray-0);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" $columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" $columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render, resourceName }) {
  return (
    <StyledBody>
      {data?.length !== 0 ? (
        data?.map(render)
      ) : (
        <StyledEmpty>
          <Empty resourceName={resourceName} />
        </StyledEmpty>
      )}
    </StyledBody>
  );
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
