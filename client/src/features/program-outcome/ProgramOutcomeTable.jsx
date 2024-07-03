import Spinner from "../../components/Spinner";
import Table from "../../components/Table";
import ProgramOutcomeRow from "./ProgramOutcomeRow";
import { useProgramOutcome } from "./useProgramOutcome";

function ProgramOutcomeTable() {
  const { isLoading, programOutcome } = useProgramOutcome();

  if (isLoading) return <Spinner />;

  return (
    <Table columns={"1fr 4fr"}>
      <Table.Header>
        <div>#</div>
        <div>Statements</div>
      </Table.Header>

      {programOutcome && (
        <Table.Body
          data={programOutcome}
          resourceName={"Program Outcomes"}
          render={(po) => <ProgramOutcomeRow po={po} key={po.id} />}
        ></Table.Body>
      )}
    </Table>
  );
}

export default ProgramOutcomeTable;
