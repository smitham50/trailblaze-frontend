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
        <div className="trail" style={{ gridRowEnd: `span ${spans}` }}>
            <Link to={`/trails/${encodeURIComponent(props.trailName)}`} >
                <img src={ props.image } ref={ imageRef } alt={props.trailName} />
                {
                    loaded
                    ?
                        <div className="trail-info">
                            <p className="small headline"><strong>{props.trailName}</strong></p>
                            <p className="small subtext">Location: {props.location}</p>
                            <p className="small subtext">Length: {props.length} miles</p>
                            <p className="small subtext">Difficulty: {props.difficulty}</p>
                        </div>
                    :
                        null
                }
                
            </Link>
        </div>
    );
};

export default Trail; 