import styled from "styled-components";

export const IconRow = styled.div`
  display: flex;
  margin: auto 0;
  font-size: 1.3rem;

  a:link,
  a:visited {
    color: #1c1b1be1;
  }
  a:hover {
    color: #7d7a7ae1;
  }
  .headline {
    font-family: "Amatic SC", cursive;
  }
  .marginal {
    margin: 2%;
  }
  .button-sized {
    font-size: 1.2em;
  }

  @media screen and (max-width: 1024px) {
    margin: 23.5rem 0;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 600px) {
    margin: 12rem 0;
    font-size: 1.3rem;
  }
`;

export const IconContainer = styled.div`
    margin: 0 8rem;

    @media screen and (max-width: 1024px) {
        margin 0 2rem;
    }
`;