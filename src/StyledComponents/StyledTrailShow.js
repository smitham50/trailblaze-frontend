import styled from "styled-components";

export const TrailShowContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 1024px) {
    margin-top: 4.5rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 1vh;

  & > * {
    margin: 0 0.5%;
  }

  .flash-message {
    font-size: 0.6em;
    display: block;
    color: rgba(91, 87, 87, 0.544);
  }

  .btn-link,
  .btn-link:active,
  .btn-link:visited {
    margin: 0.5%;
    color: #635d5d;
  }
`;

export const Button = styled.button`
  margin: 0.5%;
  color: #635d5d;
  background: transparent;
  border: none;
  font-size: 1rem;

  &:active,
  &:visited,
  a {
    color: #635d5d;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const InfoContainer = styled.div`
  padding-left: 1%;
  padding-right: 1%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .trail img {
    max-height: 45vh;
  }

  .headline {
    font-size: 2rem;
  }

  .subtext {
    font-size: 1rem;
  }

  .map {
    height: 65vh;
    flex: 1 1 450px;
  }
`;