import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TrailDiv = styled.div`
    position: relative;
`;

const TrailImage = styled.img`
    width: 100%;
    vertical-align: top;
`;

const ImageOverlay = styled.div`
    position: absolute;
    background-color: #3e3d3d2e;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
`;

const TrailInfo = styled.div`
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
        font-size: .8rem;
    }
`;

const Trail = (props) => { 
    const [spans, setSpans] = useState(0);

    const imageRef = useRef(null);

    useEffect(() => {
        try {
            imageRef.current.addEventListener("load", setRowSpans);
        } catch (e) {
            console.log(e);
        }
    }, []);

    const setRowSpans = () => {
        const height = imageRef.current.clientHeight;
        const rowSpan = Math.ceil(height / 10);
        setSpans(rowSpan); 
    };

    return (
        <Link to={`/trails/${encodeURIComponent(props.trailName)}`} style={{ gridRowEnd: `span ${spans}` }} >
            <TrailDiv className="trail" >
                <TrailImage src={ props.image } ref={ imageRef } alt={ props.trailName } />
                <ImageOverlay />
                {
                    <TrailInfo>
                        <p className="headline"><strong>{ props.trailName }</strong></p>
                        <p className="subtext">{ props.location }</p>
                    </TrailInfo>
                }
                    
                
            </TrailDiv>
        </Link >
    );
};

export default Trail; 