import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Trail = (props) => { 
    return (
        <div className="trail">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={ props.image } />
                <Card.Body>
                    <Card.Title className="small headline">{ props.trailName }</Card.Title>
                    <Card.Text className="text-muted small subtext">
                        { props.description }
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush small">
                    <ListGroupItem className="text-muted small subtext">Location: { props.location }</ListGroupItem>
                    <ListGroupItem className="text-muted small subtext">Length: { props.length } miles</ListGroupItem>
                    <ListGroupItem className="text-muted small subtext">Difficulty: { props.difficulty }</ListGroupItem>
                </ListGroup>
                <Card.Footer>
                    <Card.Link className="small headline" href={ `/trails/${encodeURIComponent(props.trailName)}` }>Take me here!</Card.Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Trail; 