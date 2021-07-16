import styled from 'styled-components';

export const TrailsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 0 10px;
    grid-auto-rows: 10.1px;
    width: 100%;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
        margin-top: 4.5rem;
    }
`;