import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    margin: 0 auto 15px;
    max-width: 600px;
    color: ${p => p.theme.colors.text };
    background: ${p => p.theme.colors.background };
    border-radius: ${p => p.theme.radii.md };
    padding: 15px;
`;

export const Label = styled.label`
    font-weight: 400;
`;

export const Input = styled.input`
    font-size: 30px;
    border: 1px solid rgb(105 116 202);
    border-radius: ${p => p.theme.radii.sm };
    color: ${p => p.theme.colors.text };
    background: #edefff;
    padding: 5px;
`;

export const Span = styled.span`
    display: flex;
    margin-bottom: 8px;
`