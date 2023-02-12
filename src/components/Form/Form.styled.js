import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => <ErrorText>{message}</ErrorText>}
        />
    );
};

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: ${p => p.theme.radii.md };
    max-width: 600px;
    margin: 0px auto;
    padding: 15px;
    background: ${p => p.theme.colors.background };
    color: ${p => p.theme.colors.text };
`;

export const Input = styled(Field)`
    font-size: 30px;
    padding: 5px;
    border: 1px solid rgb(105 116 202);
    border-radius: ${p => p.theme.radii.sm };
    background: #edefff;
    color: ${p => p.theme.colors.text };
    `;

export const ErrorText = styled.p`
color: #fc5703;
`;
