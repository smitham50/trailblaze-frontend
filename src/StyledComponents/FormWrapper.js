import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin: auto 0;
  padding 1rem;
  box-shadow: 0 0.5rem 1rem rgba(10, 10, 10, .15);

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
    font-size: .9rem;
  }
  .headline {
    font-size: 1.1rem;
  }
  .btn-success, .btn-success:active {
    background: #a7a7a7;
    border-color: #8c8c8c;
    &:hover {
      background: #848383;
    }
  }
`;