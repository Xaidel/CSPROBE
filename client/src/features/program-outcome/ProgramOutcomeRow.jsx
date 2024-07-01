import styled from "styled-components";
import Table from "../../components/Table";

const Row = styled.div`
    font-size: 1.6rem;
    font-weight: 600,
    color: var(--color-gray-5);
`;

const PONum = styled.p`
  font-weight: bold;
`;

function ProgramOutcomeRow({ po }) {
  const { po_desc, seq_num } = po;
  return (
    <Table.Row>
      <Row>
        <PONum>{`PO${seq_num}`}</PONum>
      </Row>
      <Row>{po_desc}</Row>
    </Table.Row>
  );
}

export default ProgramOutcomeRow;
