import styled from "styled-components";
import Logo from "./Logo";
import BottomNav from "./BottomNav";
import MainNav from "./MainNav";

const StyledSidebar = styled.header`
    background-color: var(--color-orange-0);
    padding: 3.2rem 2.4rem;
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap 3.2rem;
`;

const Space = styled.div`
    margin: 1.5rem 0rem;
`;



const Sidebar: React.FC = () => {
    return (
        <StyledSidebar>
            <Logo imageSize={9.6}/>
            <Space/>
            <MainNav/>
            <BottomNav/>
        </StyledSidebar>
    );
}

export default Sidebar;