import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Trail = (props) => { 
    const [spans, setSpans] = useState(0);

    const imageRef = useRef(null);

    useEffect(() => {
        try {
            imageRef.current.addEventListener("load", setRowSpans);
        } catch (e) {
            console.log("No image loaded: ", e);
        }
    }, []);
        
    

    const setRowSpans = () => {
        const height = imageRef.current.clientHeight;
        const rowSpan = Math.ceil(height / 10);
        setSpans(rowSpan); 
    };

    return (
        <Link to={`/trails/${encodeURIComponent(props.trailName)}`} style={{ gridRowEnd: `span ${spans}` }} >
            <div className="trail" >
                <img src={ props.image } ref={ imageRef } alt={ props.trailName } />
                {
                    <div className="trail-info">
                        <p className="headline"><strong>{ props.trailName }</strong></p>
                        <p className="subtext">{ props.location }</p>
                    </div>
                }
                    
                
            </div>
        </Link >
    );
};

export default Trail; 