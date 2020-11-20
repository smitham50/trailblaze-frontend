import React, { useState, useEffect, useRef } from 'react';

const Trail = (props) => { 
    const [spans, setSpans] = useState(0);

    const imageRef = useRef(null);

    useEffect(() => {
        imageRef.current.addEventListener("load", setRowSpans);
    }, []);

    const setRowSpans = () => {
        const height = imageRef.current.clientHeight;
        const rowSpan = Math.ceil(height / 10);
        setSpans(rowSpan);
    }

    return (
        <div className="trail" style={{ gridRowEnd: `span ${spans}` }}>
            <a href={`/trails/${encodeURIComponent(props.trailName)}`}>
                <img src={ props.image } ref={ imageRef } />
                <div className="trail-info">
                    <p className="small headline">{ props.trailName }</p>
                    <p className="small subtext">Location: { props.location }</p>
                    <p className="small subtext">Length: { props.length } miles</p>
                    <p className="small subtext">Difficulty: { props.difficulty }</p>
                </div>
            </a>  
        </div>
    );
};

export default Trail; 