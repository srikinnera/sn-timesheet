import { useState, FormEvent } from 'react';
import { UseMutateFunction} from 'react-query'
import { LoginWrapper, LoginForm, SubmitButton, FormInput, LoginContainer } from './styled';
import { UserInfoType, AccessTokenObj } from '../../types';

const Login = ({mutateMethod}: {mutateMethod: UseMutateFunction<AccessTokenObj, unknown, UserInfoType, unknown>}):JSX.Element => {
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

   const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
      mutateMethod({email: username, password});
  }

    return(
      <LoginContainer>
        <h1>Timesheet Login</h1>
        <LoginWrapper>
          <LoginForm onSubmit={handleSubmit}>
            <label>
              <p>Username</p>
              <FormInput id="username" type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Password</p>
              <FormInput id="password" type="password" onChange={e => setPassword(e.target.value)} />
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