import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Trail = (props) => { 
    const [spans, setSpans] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const imageRef = useRef(null);

    useEffect(() => {
        imageRef.current.addEventListener("load", setRowSpans);

        setTimeout(() => {
            setLoaded(true);
        }, 4000);
        
    }, []);

    const setRowSpans = () => {
        const height = imageRef.current.clientHeight;
        const rowSpan = Math.ceil(height / 10);
        setSpans(rowSpan); 
    };

    return (
        <Link to={`/trails/${encodeURIComponent(props.trailName)}`} style={{ gridRowEnd: `span ${spans}` }} >
            <div className="trail" >
                <img src={ props.image } ref={ imageRef } alt={props.trailName} />
                {
                    loaded
                    ?
                        <div className="trail-info">
                            <p className="headline"><strong>{props.trailName}</strong></p>
                            <p className="subtext">{props.location}</p>
                        </div>
                    :
                        null
                }
                    
                
            </div>
        </Link >
    );
};

export default Trail; 