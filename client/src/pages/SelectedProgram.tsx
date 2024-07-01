import { Outlet } from "react-router-dom";
import SelectedProgramHeader from "../features/programs/SelectedProgramHeader";



const SelectedProgram:React.FC = () => {

    return (
        <>
            <SelectedProgramHeader/>
            <Outlet/>
        </>
    );
}

export default SelectedProgram;