import { FaFolderOpen } from "react-icons/fa";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import UploadProgramForm from "./UploadProgramForm";

function UploadProgram() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="programs-form">
          <Button size="medium" $variant="secondary">
            <FaFolderOpen /> Upload Program
          </Button>
        </Modal.Open>
        <Modal.Window name="programs-form">
          <UploadProgramForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default UploadProgram;
