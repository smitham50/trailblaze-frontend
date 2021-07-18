import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    TrailDiv,
    TrailImage,
    ImageOverlay,
    TrailInfo
} from '../StyledComponents/StyledTrail';

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