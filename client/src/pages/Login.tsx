import styled from 'styled-components';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import LoginForm from '../features/authentication/LoginForm';
const LoginLayout = styled.main`
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    justify-content: center;
    min-height: 100vh;
`;

const LoginTitle = styled.div`
    background-color: var(--color-orange-0);
    min-height: 100vh;
    display: grid;
    grid-templates-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 5rem;
`;

const SystemFullName = styled.div`
    color: var(--color-white-0);
    position: relative;
    top: 200px;
    text-align: center;
`;

const LoginFormLayout = styled.main`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 48rem;
    align-content: center;
    justify-content: center;
    gap: 3.2rem;
`;

const Login: React.FC = () => {
    return (
        <LoginLayout>
            <LoginTitle>
              <Logo imageSize={30}/>  
              <SystemFullName>
                Community, Skill, Problem Outcome-Based Education
              </SystemFullName>

            </LoginTitle>
            <LoginFormLayout>
                <Heading as="h4">Log in</Heading>
                <LoginForm/>
            </LoginFormLayout>
        </LoginLayout>
    );
}

export default Login;