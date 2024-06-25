import styled from "styled-components";

interface ILogoImage{
    size: number;
}

const LogoImage = styled.img<ILogoImage>`
    height: ${(props) => props.size}rem;
`;


const StyledLogo = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: left;
`;

const Logo: React.FC<{
    imageSize: number;

}> = ({imageSize}) => {
    return (
        <StyledLogo>
            <LogoImage size={imageSize} src="/img/Logo.png" alt="CSPROBE Logo"/>
        </StyledLogo>
    );
}

export default Logo;