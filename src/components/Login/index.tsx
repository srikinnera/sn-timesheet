import { useState, FormEvent } from 'react';
import { LoginWrapper, LoginForm, SubmitButton, FormInput, LoginContainer } from './styled';

const Login = ({setToken}: {setToken: React.Dispatch<React.SetStateAction<string>>}):JSX.Element => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const token = 'set some token here';
        // call fetch and pass username and password
        setToken(token);
      }

    return(
      <LoginContainer>
        <h1>Timesheet Login</h1>
        <LoginWrapper>
          <LoginForm onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <FormInput type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
              <p>Password</p>
              <FormInput type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
              <SubmitButton type="submit">Submit</SubmitButton>
            </div>
          </LoginForm>
        </LoginWrapper>
        </LoginContainer>
      )
}

export default Login;