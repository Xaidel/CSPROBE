import { useEffect, useRef } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const ProgramsHR = styled.hr`
  border: 0.5px solid var(--color-gray-0);
  width: 100%;
  margin-top: 0.5rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 3rem;
  line-height: 1.8rem;
  font-weight: bold;
`;

const StyledNavLink = styled(NavLink)`
padding-bottom: 0.5rem;
&.active{
    border-bottom: 3px solid var(--color-orange-0);
}
`;

const SelectedProgramNav: React.FC = () => {

    const isMounted = useRef(false);
    const params = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      navigate(
        `/programs/program-offerings/${params.program_code}/program-outcomes`
      );
    }
  }, [navigate, params.program_code]);

    return (
        <nav>
            <NavList>
                <li>
                    <StyledNavLink to="program-outcomes">
                        PROGRAM OUTCOMES
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="csprobe-tagging">
                        CSPROBE TAGGING
                    </StyledNavLink>
                </li>
            </NavList>
            <ProgramsHR/>
        </nav>
    );
}

export default SelectedProgramNav;