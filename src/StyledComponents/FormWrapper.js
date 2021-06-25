import styled from 'styled-components';

export const FormWrapper = styled.div`
    .form-card {
        width: 25rem;
        padding: 1rem;
    }
    form {
        width: 100%;
    }
    .flash-container {
        position: relative;
    }
    .form-flash {
        position: absolute;
    }
    .subtext {
        font-family: Source Sans Pro, sans-serif;
    }
    .headline {
        font-family: Amatic SC, cursive;
    }
    .btn-success {
        background: #a7a7a7;
        border-color: #8c8c8c;
        &:hover {
            background: #848383;
        }
    }
`;