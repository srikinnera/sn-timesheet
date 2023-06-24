import styled from "styled-components";

export const Form = styled.form`
    margin: 15px;
`;


export const Row = styled.div`
    display: flex;
`;

export const FormContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const SubmitButton = styled.button`
    width: 200px;
    position: absolute;
    left: 44%;
    height: 50px;
    margin: 10px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    text-transform: uppercase;
`;

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ErrorMessage = styled.p`
    color: red;
    margin: 0 0 0 10px;
    word-wrap: break-word;
    width: 75%
`;