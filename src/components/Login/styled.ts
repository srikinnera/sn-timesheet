import styled from 'styled-components'

export const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const LoginForm = styled.form`
    width: 100%;
    max-width: 414px;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const SubmitButton = styled.button`
    width: 100px;
    max-width: 100%;
    position: absolute;
    left: 45%;
    padding: 11px 13px;
    color: rgb(253, 249, 243);
    font-weight: 600;
    text-transform: uppercase;
    background: green;
    border: none;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    margin-top: 0.6rem;
`;

export const FormInput = styled.input`
    width: 500px;
    max-width: 100%;
    padding: 11px 13px;
    margin-bottom: 0.9rem;
    border-radius: 4px;
    outline: 0;
    font-size: 14px;
`;