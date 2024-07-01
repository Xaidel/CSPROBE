import { useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Programs:React.FC = () => {
    const navigate = useNavigate();
    const isMounted = useRef(false);
    useEffect(()=>{
        if(!isMounted.current){
            isMounted.current = true;
            navigate("program-offerings");
        }
    },[navigate]);


    return (
        <>  
            <Outlet/>
        </>
    );
}

export default Programs;