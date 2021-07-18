import styled from "styled-components";

export const TrailDiv = styled.div`
  position: relative;
`;

export const TrailImage = styled.img`
  width: 100%;
  vertical-align: top;
`;

export const ImageOverlay = styled.div`
  position: absolute;
  background-color: #3e3d3d2e;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const TrailInfo = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  .headline {
    font-size: 1rem;
    font-weight: 700;
  }
  .subtext {
    font-size: 0.8rem;
  }
`;
