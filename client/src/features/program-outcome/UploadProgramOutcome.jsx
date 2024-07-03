import { FaFolderOpen } from "react-icons/fa";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import UploadProgramOutcomeForm from "./UploadProgramOutcomeForm";

function UploadProgramOutcome() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="program-outcomes-form">
          <Button size="medium" $variant="secondary">
            <FaFolderOpen /> Upload Program Outcomes
          </Button>
        </Modal.Open>
        <Modal.Window name="program-outcomes-form">
          <UploadProgramOutcomeForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default UploadProgramOutcome;
