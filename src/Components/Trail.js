import React, { Fragment } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Trail = (props) => { 
    return (
        <div className="trail">
            <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src={ props.image } />
                <Card.Body>
                    <Card.Title>{ props.trailName }</Card.Title>
                    <Card.Text>
                        { props.description }
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Location: { props.location }</ListGroupItem>
                    <ListGroupItem>Length: { props.length } miles</ListGroupItem>
                    <ListGroupItem>Difficulty: { props.difficulty }</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href={ `/trails/${encodeURIComponent(props.trailName)}` }>Take me here!</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Trail; 