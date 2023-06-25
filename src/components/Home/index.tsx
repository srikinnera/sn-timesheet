import { useNavigate } from 'react-router-dom';
import {TimesheetForm} from '../TimesheetForm'
import { StyledLink } from './styled';

const Home = ():JSX.Element => {
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
       event.preventDefault();
        navigate("/view");
    }
    return(
    <>
        <StyledLink variant='text' onClick={(event) => handleClick(event)}>View My Timesheets</StyledLink>
        <TimesheetForm />
    </>
    );
}

export default Home;